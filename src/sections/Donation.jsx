import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {
  HeartHandshake,
  CreditCard,
  ShoppingCartIcon as Paypal,
  Bitcoin,
} from "lucide-react";
import axios from "axios";

// Toastify Configuration

const CustomLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium mb-2">
    {children}
  </label>
);

const CustomInput = ({ id, placeholder, value, onChange }) => (
  <input
    id={id}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

// const CustomSelect = ({ id, value, onChange, placeholder, options }) => (
//   <select
//     id={id}
//     value={value}
//     onChange={onChange}
//     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   >
//     <option value="">{placeholder}</option>
//     {options.map((option) => (
//       <option key={option.code} value={option.name}>
//         {option.name}
//       </option>
//     ))}
//   </select>
// );

const CustomSelect = ({ id, value, onChange, placeholder, options }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={option.code || index} value={option.name}>
        {option.name}
      </option>
    ))}
  </select>
);


const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:2002/api/countries");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        toast.error("Failed to load countries.");
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const isCardNumberValid = cardNumber.length === 16;
    const isCardExpiryValid = /^\d{2}\/\d{2}$/.test(cardExpiry);
    const isCardCVCValid = cardCVC.length === 3;
    const isAmountValid = parseFloat(amount) > 0;
    const isCountrySelected = country.trim() !== "";

    setIsFormValid(
      isCardNumberValid &&
        isCardExpiryValid &&
        isCardCVCValid &&
        isAmountValid &&
        isCountrySelected
    );
  }, [cardNumber, cardExpiry, cardCVC, amount, country]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:2002/form/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardNumber,
          expiryDate: cardExpiry,
          cvv: cardCVC,
          amount,
          country,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thanks for using Live4today platform!");
        setCardNumber("");
        setCardExpiry("");
        setCardCVC("");
        setAmount("");
        setCountry("");
        setShowModal(true); // Show the appreciation modal
      } else {
        toast.error(data.error || "An error occurred.");
      }
    } catch (error) {
      toast.error("Failed to submit form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Card Details */}
        <div className="mb-4">
          <CustomLabel htmlFor="cardNumber">Card Number</CustomLabel>
          <CustomInput
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <CustomLabel htmlFor="expiry">Expiry Date</CustomLabel>
            <CustomInput
              id="expiry"
              placeholder="MM/YY"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)}
            />
          </div>
          <div className="w-1/2 pl-2">
            <CustomLabel htmlFor="cvc">CVC</CustomLabel>
            <CustomInput
              id="cvc"
              placeholder="123"
              value={cardCVC}
              onChange={(e) => setCardCVC(e.target.value)}
            />
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <CustomLabel htmlFor="amount">Amount</CustomLabel>
          <CustomInput
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <CustomLabel htmlFor="country">Country</CustomLabel>
          <CustomSelect
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Select a country"
            options={countries}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            isFormValid
              ? "bg-[#1AD0D1] text-white hover:bg-[#15B8B9]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Loading..." : "Donate Now"}
        </button>
      </form>

      {/* Appreciation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your donation has been received and is being processed. This may
              take up to 24 hours to reflect in your account. We deeply
              appreciate your generosity!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



const PayPalForm = () => {
  const [paypalDetails, setPaypalDetails] = useState({
    paypalEmail: "",
    receiverName: "",
    paymentNote: "",
  });
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch admin PayPal details
  useEffect(() => {
    const fetchAdminPaymentDetails = async () => {
      try {
        const response = await fetch("http://localhost:2002/form/get-admin-payment-details");
        if (!response.ok) throw new Error("Failed to fetch admin PayPal details.");
        const data = await response.json();

        const { paypalDetails } = data;
        setPaypalDetails({
          paypalEmail: paypalDetails.email || "Not available",
          receiverName: paypalDetails.receiverName || "Not available",
          paymentNote: paypalDetails.paymentNote || "Not available",
        });
      } catch (error) {
        toast.error("Failed to load PayPal details.");
      }
    };

    fetchAdminPaymentDetails();
  }, []);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:2002/api/countries");
        if (!response.ok) throw new Error("Failed to fetch countries.");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        toast.error("Failed to load countries.");
      }
    };

    fetchCountries();
  }, []);

  // Form validation
  useEffect(() => {
    const isAmountValid = parseFloat(amount) > 0;
    const isCountrySelected = country.trim() !== "";
    setIsFormValid(isAmountValid && isCountrySelected);
  }, [amount, country]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:2002/form/paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          country,
        }),
      });

      if (response.ok) {
        toast.success("Thanks for donating via PayPal!");
        setAmount("");
        setCountry("");
        setShowModal(true);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "An error occurred.");
      }
    } catch (error) {
      toast.error("Failed to process PayPal donation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* PayPal Details */}
        <div className="mb-4">
          <CustomLabel>PayPal Email</CustomLabel>
          <CustomInput value={paypalDetails.paypalEmail} readOnly={true} />
        </div>
        <div className="mb-4">
          <CustomLabel>Name</CustomLabel>
          <CustomInput value={paypalDetails.receiverName} readOnly={true} />
        </div>
        <div className="mb-4">
          <CustomLabel>Payment Type</CustomLabel>
          <CustomInput value={paypalDetails.paymentNote} readOnly={true} />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <CustomLabel htmlFor="amount">Amount Sent</CustomLabel>
          <CustomInput
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <CustomLabel htmlFor="country">Country</CustomLabel>
          <CustomSelect
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Select a country"
            options={countries}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            isFormValid
              ? "bg-[#1AD0D1] text-white hover:bg-[#15B8B9]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Processing..." : "Donate Now"}
        </button>
      </form>

      {/* Appreciation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700">
              Your donation via PayPal is being processed. This may take up to
              24 hours to reflect. We deeply appreciate your generosity!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};




// const BitcoinForm = () => (
  
//   <div className="max-w-md mx-auto">
//     <div className="mb-4">
//       <CustomLabel>Bitcoin Address</CustomLabel>
//       <CustomInput value="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" readOnly={true} />
//     </div>
//     <p className="text-sm text-gray-600 mt-2">
//       Please send your Bitcoin donation to the address above. We appreciate your
//       support!
//     </p>
//     <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//       <h4 className="font-semibold mb-2">How to donate with Bitcoin:</h4>
//       <ol className="list-decimal list-inside text-sm">
//         <li>Copy the Bitcoin address above</li>
//         <li>Open your Bitcoin wallet application</li>
//         <li>Select the option to send Bitcoin</li>
//         <li>Paste the address and enter the amount you wish to donate</li>
//         <li>Confirm and send the transaction</li>
//       </ol>
//     </div>
//   </div>
// );


const BitcoinForm = () => {
  const [btcDetails, setBtcDetails] = useState({
    btcWalletAddress: "",
  });
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchAdminPaymentDetails = async () => {
      try {
        const response = await fetch("http://localhost:2002/form/get-admin-payment-details");
        if (!response.ok) throw new Error("Failed to fetch admin Wallet details.");
        const data = await response.json();

        const { btcWalletAddress } = data;
        setBtcDetails({
          btcWalletAddress: btcWalletAddress || "Not available",
        });
      } catch (error) {
        toast.error("Failed to load PayPal details.");
      }
    };

    fetchAdminPaymentDetails();
  }, []);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:2002/api/countries");
        if (!response.ok) throw new Error("Failed to fetch countries.");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        toast.error("Failed to load countries.");
      }
    };

    fetchCountries();
  }, []);

  // Form validation
  useEffect(() => {
    const isAmountValid = parseFloat(amount) > 0;
    const isCountrySelected = country.trim() !== "";
    setIsFormValid(isAmountValid && isCountrySelected);
  }, [amount, country]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:2002/form/submit-btc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          country,
        }),
      });

      if (response.ok) {
        toast.success("Thanks for donating via Bitcoin!");
        setAmount("");
        setCountry("");
        setShowModal(true);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "An error occurred.");
      }
    } catch (error) {
      toast.error("Failed to process Bitcoin donation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Bitcoin Address */}
        <div className="mb-4">
          <CustomLabel>Bitcoin Address</CustomLabel>
          <CustomInput value={btcDetails.btcWalletAddress} readOnly={true} />
          </div>
        <p className="text-sm text-gray-600 mt-2">
          Please send your Bitcoin donation to the address above. We appreciate your support!
        </p>

        {/* Amount */}
        <div className="mb-4">
          <CustomLabel htmlFor="amount">Amount</CustomLabel>
          <CustomInput
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <CustomLabel htmlFor="country">Country</CustomLabel>
          <CustomSelect
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Select a country"
            options={countries}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            isFormValid
              ? "bg-[#1AD0D1] text-white hover:bg-[#15B8B9]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Processing..." : "Donate Now"}
        </button>
      </form>

      {/* Appreciation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Thank You!</h2>
            <p className="text-gray-700">
              Your Bitcoin donation is being processed. This may take some time to confirm.
              We deeply appreciate your generosity!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



const TabButton = ({ active, onClick, children }) => (
  <button
    className={`flex-1 py-3 px-4 flex items-center justify-center  ${
      active
        ? "border-b-2 border-[#1AD0D1] text-[#1AD0D1]"
        : "text-gray-600 hover:text-gray-800"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const DonationSection = () => {
  const [selectedTab, setSelectedTab] = useState("card");

  const tabs = [
    { id: "card", Icon: CreditCard, label: "Credit/Debit Card" },
    { id: "paypal", Icon: Paypal, label: "PayPal" },
    { id: "bitcoin", Icon: Bitcoin, label: "Bitcoin" },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "card":
        return <CreditCardForm />;
      case "paypal":
        return <PayPalForm />;
      case "bitcoin":
        return <BitcoinForm />;
      default:
        return <CreditCardForm />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-20 mb-20">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#1D1D1D]">Support Our Cause</h2>
        <p className="text-lg mt-2 text-gray-600">
          Your generosity can make a real difference. Choose your preferred
          method of donation below.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#1D1D1D]">
          Why Your Donation Matters
        </h3>
        <p className="text-gray-700 mb-4">
          Every contribution, no matter the size, helps us continue our mission
          to make a positive impact in our community. Your support enables us
          to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Provide essential resources to those in need</li>
          <li>Fund critical research and development projects</li>
          <li>Organize community outreach programs</li>
          <li>Maintain and expand our support services</li>
        </ul>
        <p className="text-gray-700">
          Together, we can create lasting change and build a brighter future for
          all.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          {tabs.map(({ id, Icon, label }) => (
            <TabButton
              key={id}
              active={selectedTab === id}
              onClick={() => setSelectedTab(id)}
            >
              <Icon className="w-5 h-5" />
              {label}
            </TabButton>
          ))}
        </div>
      </div>

      {renderTabContent()}

      <div className="flex items-center justify-center text-gray-600 mt-8">
        <HeartHandshake className="w-6 h-6 mr-2 text-[#1AD0D1]" />
        <span>Thank you for your support!</span>
      </div>
    </div>
  );
};

export default DonationSection;

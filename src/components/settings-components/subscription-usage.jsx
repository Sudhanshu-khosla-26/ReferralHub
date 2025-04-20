"use client"

import { useState } from "react"
import { Download } from "lucide-react"

export default function SubscriptionUsage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [saveCard, setSaveCard] = useState(false)
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  })

  const handleCardChange = (e) => {
    const { name, value } = e.target
    setCardData((prev) => ({ ...prev, [name]: value }))
  }

  const billingHistory = [
    { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Pending" },
    { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Failed" },
    { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid" },
    { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid" },
    { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid" },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
      {/* Current Plan */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-6">Current Plan</h2>

        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Your Current Plan is Basic</p>
            <p className="text-sm text-gray-500">A simple start for everyone</p>
          </div>

          <div>
            <p className="text-gray-600">Active until May 09, 2025</p>
            <p className="text-sm text-gray-500">We will send you a notification upon Subscription expiration</p>
          </div>

          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">Days</span>
              <span className="text-gray-600">12 of 30 Days</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">18 days remaining until your plan requires update</p>
          </div>

          <div className="pt-2">
            <p className="text-gray-600 font-medium">
              $25 Per Month <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded ml-2">Popular</span>
            </p>
            <p className="text-sm text-gray-500">Standard plan for small to medium businesses</p>
          </div>

          <div className="flex space-x-4 pt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Upgrade Plan
            </button>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t pt-10">
        <h2 className="text-xl font-medium text-gray-800 mb-6">Payment Methods</h2>

        <div className="space-y-6">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="card-payment"
                name="payment-method"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="w-4 h-4 text-blue-600"
              />
              <label htmlFor="card-payment" className="ml-2">
                Credit/Debit/ATM Card
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="paypal-payment"
                name="payment-method"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="w-4 h-4 text-blue-600"
              />
              <label htmlFor="paypal-payment" className="ml-2">
                Paypal account
              </label>
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-gray-600 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="number"
                  value={cardData.number}
                  onChange={handleCardChange}
                  placeholder="1356 3215 6548 7898"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label htmlFor="card-name" className="block text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="name"
                    value={cardData.name}
                    onChange={handleCardChange}
                    placeholder="John Doe"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="card-expiry" className="block text-gray-600 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="card-expiry"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="card-cvv" className="block text-gray-600 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-cvv"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    placeholder="654"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="save-card"
                  checked={saveCard}
                  onChange={() => setSaveCard(!saveCard)}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="save-card" className="ml-2 text-gray-600">
                  Save card for future billing?
                </label>
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
                <button className="border text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-medium text-gray-700 mb-4">My Cards</h3>

            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <p className="font-medium">Tom McBride</p>
                    <p className="text-gray-500 text-sm">**** **** 9856</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Primary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-500">Card expires at 12/26</p>
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>

              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                    <span className="text-white font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">Mildred Wagner</p>
                    <p className="text-gray-500 text-sm">**** **** 5896</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-500">Card expires at 10/27</p>
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="border-t pt-10">
        <h2 className="text-xl font-medium text-gray-800 mb-6">Billing History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issued Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {billingHistory.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">Showing 1 to 5 of 200 entries</p>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">&lt;</button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">4</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">5</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">...</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">20</button>
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

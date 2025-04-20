"use client"

import { useState } from "react"

export function PayoutSettings() {
  const [preloadEnabled, setPreloadEnabled] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [amount, setAmount] = useState("")

  return (
    <div className="space-y-8 ">
      <div className="flex items-center gap-6">
        <div>
          <h3 className="text-lg font-medium">Preload Money</h3>
          <p className="text-gray-500">Use Points to Reward Promoters Instantly</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={preloadEnabled}
            onChange={() => setPreloadEnabled(!preloadEnabled)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-center gap-2">
            <p className="text-gray-600">Current Point Balance:</p>
            <p className="text-2xl font-bold">
              <span className="text-blue-600">1,250</span> Points
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-2">Enter Amount</label>
        <input
          type="text"
          className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-2">You'll receive 10 points per $1</p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
        <div className="space-y-3 flex gap-4 items-center">
          <label className="flex items-center  gap-2">
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={() => setPaymentMethod("credit")}
              className="w-4 h-4 text-blue-600"
            />
            <span>Credit/Debit/ATM Card</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="w-4 h-4 text-blue-600"
            />
            <span>Paypal account</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
              className="w-4 h-4 text-blue-600"
            />
            <span>Bank Transfer</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
              className="w-4 h-4 text-blue-600"
            />
            <span>UPI</span>
          </label>
        </div>
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Buy Points
      </button>
    </div>
  )
}

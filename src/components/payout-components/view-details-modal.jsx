"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

export function ViewDetailsModal({ payout, onClose, onRequestDispute }) {
  useEffect(() => {
    // Add animation class when component mounts
    const modal = document.getElementById("view-details-modal")
    setTimeout(() => {
      modal.classList.add("opacity-100")
      modal.classList.remove("opacity-0", "translate-y-4")
    }, 10)

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div
        id="view-details-modal"
        className="bg-white rounded-lg w-full max-w-md transform transition-all duration-300 opacity-0 translate-y-4"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">View Details</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="divide-y">
          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Payout ID:</div>
            <div className="w-1/2">{payout.id}</div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Promoter Name:</div>
            <div className="w-1/2">{payout.promoterName}</div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Points:</div>
            <div className="w-1/2">{payout.points}</div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Reward Date:</div>
            <div className="w-1/2">{payout.rewardDate}</div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Reward Earned For:</div>
            <div className="w-1/2">{payout.rewardEarnedFor}</div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Status:</div>
            <div className="w-1/2">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{payout.status}</span>
            </div>
          </div>

          <div className="flex py-4 px-6">
            <div className="w-1/2 text-gray-600">Transaction ID:</div>
            <div className="w-1/2">{payout.transactionId}</div>
          </div>
        </div>

        <div className="p-4 flex justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => onRequestDispute(payout)}
          >
            Request Dispute
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

export function AllPayouts({ onViewDetails }) {
  const [payouts] = useState([
    {
      id: "#P-1048",
      promoterName: "Emery Dokidis",
      points: "500 pts",
      rewardDate: "Apr 5, 2025",
      rewardEarnedFor: "Spring Boost",
      status: "Paid",
      transactionId: "TXN-90218371",
    },
    {
      id: "#P-1049",
      promoterName: "Randy Culhane",
      points: "300 pts",
      rewardDate: "Apr 7, 2025",
      rewardEarnedFor: "Early Bird Special",
      status: "Paid",
      transactionId: "TXN-90218372",
    },
    {
      id: "#P-1050",
      promoterName: "Kadin Lipshutz",
      points: "250 pts",
      rewardDate: "Apr 10, 2025",
      rewardEarnedFor: "Summer Referral Program",
      status: "Paid",
      transactionId: "TXN-90218373",
    },
  ])

  return (
    <div className="bg-white text-[#646464] rounded-lg border border-gray-300 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="text-left py-3 px-4 font-medium text-gray-600">Payout ID</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Promoter Name</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Points</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Reward Date</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Reward Earned For</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((payout) => (
            <tr key={payout.id} className="border-b border-gray-300 hover:bg-gray-50">
              <td className="py-3 px-4">{payout.id}</td>
              <td className="py-3 px-4">{payout.promoterName}</td>
              <td className="py-3 px-4">{payout.points}</td>
              <td className="py-3 px-4">{payout.rewardDate}</td>
              <td className="py-3 px-4">{payout.rewardEarnedFor}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{payout.status}</span>
              </td>
              <td className="py-3 px-4">
                <button
                  className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                  onClick={() => onViewDetails(payout)}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

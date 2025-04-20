"use client"

import { useState } from "react"
import { Eye } from "lucide-react"
import { Filter } from "lucide-react"

export function Disputes({ onViewDetails }) {
  const [disputes] = useState([
    {
      id: "D-3012",
      payoutId: "#P-1048",
      promoterName: "Emery Dokidis",
      points: "500 pts",
      submittedOn: "28-4-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Resolved",
      reasonProvided: "Promoter claimed reward not received",
    },
    {
      id: "D-3013",
      payoutId: "#P-1049",
      promoterName: "Kadin Lipshutz",
      points: "250 pts",
      submittedOn: "27-5-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Resolved",
      reasonProvided: "Promoter claimed incorrect points",
    },
    {
      id: "D-3014",
      payoutId: "#P-1048",
      promoterName: "Randy Culhane",
      points: "300 pts",
      submittedOn: "29-5-2024",
      rewardEarnedFor: "Early Bird Special",
      status: "Under Review",
      reasonProvided: "Promoter claimed reward not received",
    },
    {
      id: "D-3015",
      payoutId: "#P-1050",
      promoterName: "Jaxson Vaccaro",
      points: "100 pts",
      submittedOn: "30-6-2024",
      rewardEarnedFor: "Early Bird Special",
      status: "Resolved",
      reasonProvided: "Promoter claimed incorrect points",
    },
    {
      id: "D-3016",
      payoutId: "#P-1051",
      promoterName: "Jocelyn Levin",
      points: "200 pts",
      submittedOn: "01-7-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Under Review",
      reasonProvided: "Promoter claimed reward not received",
    },
    {
      id: "D-3017",
      payoutId: "#P-1052",
      promoterName: "Maren Septimus",
      points: "300 pts",
      submittedOn: "03-7-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Resolved",
      reasonProvided: "Promoter claimed incorrect points",
    },
    {
      id: "D-3018",
      payoutId: "#P-1053",
      promoterName: "Haylie Saris",
      points: "220 pts",
      submittedOn: "05-7-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Resolved",
      reasonProvided: "Promoter claimed reward not received",
    },
    {
      id: "D-3019",
      payoutId: "#P-1054",
      promoterName: "Randy Herwitz",
      points: "400 pts",
      submittedOn: "10-7-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Under Review",
      reasonProvided: "Promoter claimed incorrect points",
    },
  ])

  return (
    <div>
      <div className="flex text-[#646464] justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Disputes</h2>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      <div className="bg-white text-[#646464] rounded-lg border border-gray-300 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Dispute ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Promoter Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Points</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Submitted On</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Reward Earned For</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute) => (
              <tr key={dispute.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="py-3 px-4">{dispute.id}</td>
                <td className="py-3 px-4">{dispute.promoterName}</td>
                <td className="py-3 px-4">{dispute.points}</td>
                <td className="py-3 px-4">{dispute.submittedOn}</td>
                <td className="py-3 px-4">{dispute.rewardEarnedFor}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${dispute.status === "Resolved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {dispute.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <button
                    className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                    onClick={() => onViewDetails(dispute)}
                  >
                    <Eye className="w-5 h-5" />
                  </button>

                  {dispute.status === "Under Review" && (
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">Resolve</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

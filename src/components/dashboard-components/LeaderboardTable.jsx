"use client"

import { motion } from "framer-motion"

export default function LeaderboardTable({ promoters }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-gray-500">
            <th className="pb-3 pl-2">Rank</th>
            <th className="pb-3 pl-2">Promoter Name</th>
            <th className="pb-3 pr-2 text-right">Conversion Rate</th>
            <th className="pb-3 pr-2 text-right">Referrals Sent</th>
            <th className="pb-3 pr-2 text-right">Successful Conversions</th>
            <th className="pb-3 pr-2 text-right">Revenue Generated</th>
          </tr>
        </thead>
        <tbody>
          {promoters.map((promoter, index) => (
            <motion.tr
              key={index}
              className="border-b text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ backgroundColor: "#f9fafb" }}
            >
              <td className="py-4 pl-2 font-medium">{promoter.rank}</td>
              <td className="py-4 pl-2 font-medium">{promoter.name}</td>
              <td className="py-4 pr-2 text-right">{promoter.conversions}</td>
              <td className="py-4 pr-2 text-right">{promoter.referrals}</td>
              <td className="py-4 pr-2 text-right">{promoter.successRate}</td>
              <td className="py-4 pr-2 text-right font-medium">{promoter.revenue}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

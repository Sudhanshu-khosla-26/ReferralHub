"use client"

import { motion } from "framer-motion"

export default function ActivityTable({ activities }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-gray-500">
            <th className="pb-3 pl-2">Activities</th>
            <th className="pb-3 pr-2 text-right">Date</th>
            <th className="pb-3 pr-2 text-right">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <motion.tr
              key={index}
              className="border-b text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ backgroundColor: "#f9fafb" }}
            >
              <td className="py-4 pl-2">{activity.activity}</td>
              <td className="py-4 pr-2 text-right text-gray-500">{activity.date}</td>
              <td className="py-4 pr-2 text-right text-gray-500">{activity.time}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

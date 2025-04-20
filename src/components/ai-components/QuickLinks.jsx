"use client"

import { motion } from "framer-motion"

export default function QuickLinks() {
  const links = [
    {
      name: "SEND REFERRAL",
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    },
    { name: "CREATE CAMPAIGN", icon: "M12 4v16m8-8H4" },
    {
      name: "FOLLOW-UP",
      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
    },
    {
      name: "VIEW REFERRAL",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    },
  ]

  return (
    <div className="py-4 px-6 border-b border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Links</h3>
      <div className="grid grid-cols-4 gap-3">
        {links.map((link) => (
          <motion.button
            key={link.name}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-blue-500 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
            </svg>
            <span className="text-xs font-medium text-gray-700">{link.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

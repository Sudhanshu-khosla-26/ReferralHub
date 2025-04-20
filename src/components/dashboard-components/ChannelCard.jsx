"use client"

import { motion } from "framer-motion"

export default function ChannelCard({ name, percentage, color }) {
  return (
    <motion.div
      className={`rounded-lg p-4 ${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-center">
        <h4 className="mb-2 text-sm font-medium">{name}</h4>
        <p className="text-2xl font-bold">{percentage}%</p>
      </div>
    </motion.div>
  )
}

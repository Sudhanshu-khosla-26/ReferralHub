"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function CircleChart({ title, percentage, color }) {
  const canvasRef = useRef(null)

  const colorMap = {
    emerald: { bg: "#d1fae5", main: "#10b981" },
    orange: { bg: "#ffedd5", main: "#f97316" },
    blue: { bg: "#dbeafe", main: "#3b82f6" },
    purple: { bg: "#f3e8ff", main: "#a855f7" },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = colorMap[color].bg
    ctx.lineWidth = 10
    ctx.stroke()

    // Draw progress
    const startAngle = -0.5 * Math.PI
    const endAngle = startAngle + (percentage / 100) * 2 * Math.PI

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.strokeStyle = colorMap[color].main
    ctx.lineWidth = 10
    ctx.stroke()

    // Draw percentage text
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = colorMap[color].main
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${percentage}%`, centerX, centerY)
  }, [percentage, color])

  return (
    <motion.div
      className="rounded-lg bg-white p-6 shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        <canvas ref={canvasRef} width={150} height={150} className="max-w-full" />
      </div>
    </motion.div>
  )
}

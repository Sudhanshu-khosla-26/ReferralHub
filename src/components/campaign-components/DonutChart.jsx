"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function DonutChart({ data }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20
    const innerRadius = radius * 0.6

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw donut segments
    let startAngle = -0.5 * Math.PI

    data.forEach((item) => {
      const segmentAngle = (item.value / total) * 2 * Math.PI
      const endAngle = startAngle + segmentAngle

      // Draw segment
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true)
      ctx.closePath()

      ctx.fillStyle = item.color.startsWith("#") ? item.color : `#${item.color}`
      ctx.fill()

      startAngle = endAngle
    })

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = "#fff"
    ctx.fill()

    // Draw legend
    const legendY = canvas.height - 60

    data.forEach((item, index) => {
      const x = centerX - 80 + index * 160
      const y = legendY

      // Draw color box
      ctx.fillStyle = item.color.startsWith("#") ? item.color : `#${item.color}`
      ctx.fillRect(x, y, 12, 12)

      // Draw text
      ctx.font = "12px Arial"
      ctx.fillStyle = "#4b5563"
      ctx.textAlign = "left"
      ctx.fillText(`${item.name} ${item.value}%`, x + 18, y + 10)
    })
  }, [data])

  return (
    <motion.div
      className="relative h-64 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <canvas ref={canvasRef} width={400} height={300} className="h-full w-full" />
    </motion.div>
  )
}

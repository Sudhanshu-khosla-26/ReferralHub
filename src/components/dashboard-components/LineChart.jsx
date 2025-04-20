"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function LineChart({ data }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // Draw horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height - 2 * padding) * (1 - i / 5)
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)

      // Add percentage labels
      ctx.font = "12px Arial"
      ctx.fillStyle = "#9ca3af"
      ctx.textAlign = "right"
      ctx.fillText(`${i * 10}%`, padding - 10, y + 4)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    data.labels.forEach((label, i) => {
      const x = padding + (width - 2 * padding) * (i / (data.labels.length - 1))
      ctx.fillText(label, x, height - padding + 20)
    })

    ctx.stroke()

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 3

    data.data.forEach((value, i) => {
      const x = padding + (width - 2 * padding) * (i / (data.data.length - 1))
      const y = padding + (height - 2 * padding) * (1 - value / 50)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    data.data.forEach((value, i) => {
      const x = padding + (width - 2 * padding) * (i / (data.data.length - 1))
      const y = padding + (height - 2 * padding) * (1 - value / 50)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#fff"
      ctx.fill()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw highlight if exists
    if (data.highlight) {
      const highlightIndex = data.labels.indexOf(data.highlight.month)
      if (highlightIndex !== -1) {
        const x = padding + (width - 2 * padding) * (highlightIndex / (data.labels.length - 1))
        const y = padding + (height - 2 * padding) * (1 - data.highlight.value / 50)

        // Draw highlight point
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, 2 * Math.PI)
        ctx.fillStyle = "#3b82f6"
        ctx.fill()

        // Draw tooltip
        const tooltipWidth = 80
        const tooltipHeight = 40
        const tooltipX = x - tooltipWidth / 2
        const tooltipY = y - tooltipHeight - 10

        ctx.beginPath()
        ctx.roundRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 4)
        ctx.fillStyle = "#4b5563"
        ctx.fill()

        // Draw tooltip text
        ctx.font = "bold 12px Arial"
        ctx.fillStyle = "#fff"
        ctx.textAlign = "center"
        ctx.fillText(data.highlight.change, x, tooltipY + 15)
        ctx.font = "12px Arial"
        ctx.fillText(data.highlight.value + "%", x, tooltipY + 30)

        // Draw tooltip arrow
        ctx.beginPath()
        ctx.moveTo(x, tooltipY + tooltipHeight)
        ctx.lineTo(x - 6, tooltipY + tooltipHeight)
        ctx.lineTo(x, tooltipY + tooltipHeight + 6)
        ctx.lineTo(x + 6, tooltipY + tooltipHeight)
        ctx.closePath()
        ctx.fillStyle = "#4b5563"
        ctx.fill()
      }
    }
  }, [data])

  return (
    <motion.div
      className="relative h-64 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <canvas ref={canvasRef} width={800} height={300} className="h-full w-full" />
    </motion.div>
  )
}

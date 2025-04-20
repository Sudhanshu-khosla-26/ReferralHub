"use client"

import { useState, useEffect, useRef } from "react"

export default function Overview({ customer }) {
  const [chartData, setChartData] = useState([])
  const canvasRef = useRef(null)

  useEffect(() => {
    // Generate random data for the chart
    const data = []
    for (let i = 0; i < 12; i++) {
      data.push({
        month: i,
        value: Math.floor(Math.random() * 40) + 20,
      })
    }
    setChartData(data)
  }, [])

  useEffect(() => {
    if (chartData.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw grid lines
      ctx.beginPath()
      ctx.strokeStyle = "#e5e7eb"
      for (let i = 0; i <= 5; i++) {
        const y = height - (i * height) / 5
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }

      for (let i = 0; i <= 6; i++) {
        const x = (i * width) / 6
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      ctx.stroke()

      // Draw x-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      for (let i = 0; i < 6; i++) {
        const x = (i * width) / 6 + width / 12
        ctx.fillText(months[i], x, height - 5)
      }

      // Draw y-axis labels
      ctx.textAlign = "right"
      for (let i = 0; i <= 5; i++) {
        const y = height - (i * height) / 5
        ctx.fillText(`${i * 10}%`, 25, y + 3)
      }

      // Draw line chart
      ctx.beginPath()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2

      chartData.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo((index * width) / 11, height - (point.value * height) / 50)
        } else {
          ctx.lineTo((index * width) / 11, height - (point.value * height) / 50)
        }
      })

      ctx.stroke()

      // Draw highlight point at 30%
      ctx.beginPath()
      ctx.fillStyle = "#ef4444"
      ctx.arc(width / 3, height - (30 * height) / 50, 5, 0, Math.PI * 2)
      ctx.fill()

      // Draw highlight text
      ctx.fillStyle = "#ef4444"
      ctx.textAlign = "center"
      ctx.fillText("30%", width / 3, height - (30 * height) / 50 - 10)
    }
  }, [chartData])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Referrals Over Time</h3>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>

      <div className="border rounded-lg p-4 h-64">
        <canvas ref={canvasRef} width="600" height="200" className="w-full h-full"></canvas>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex">
              <span className="text-gray-500 w-32">Member since:</span>
              <span>{customer.contactInfo.memberSince}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32">Location:</span>
              <span>{customer.contactInfo.location}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32">Phone:</span>
              <span>{customer.contactInfo.phone}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32">Email:</span>
              <span>{customer.contactInfo.email}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32">Time zone:</span>
              <span>{customer.contactInfo.timezone}</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {customer.interactions.slice(0, 3).map((interaction) => (
              <div key={interaction.id} className="flex items-start">
                <div
                  className={`p-2 rounded-full mr-3 ${
                    interaction.type === "Call"
                      ? "bg-blue-100"
                      : interaction.type === "Email"
                        ? "bg-green-100"
                        : "bg-orange-100"
                  }`}
                >
                  {interaction.type === "Call" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  )}
                  {interaction.type === "Email" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  {interaction.type === "SMS" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-orange-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{interaction.type}</span>
                    <span className="text-xs text-gray-500">{interaction.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{interaction.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

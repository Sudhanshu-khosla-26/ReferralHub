"use client"

import { useState } from "react"
import { ChevronLeft, MessageSquare, Mail, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function LeadDetails({ lead, onBack }) {
  const [status, setStatus] = useState(lead?.status || "Completed")
  const [isStatusOpen, setIsStatusOpen] = useState(false)

  const statusOptions = ["Pending", "In Progress", "Completed", "Cancelled"]

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    setIsStatusOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow"
    >
      <div className="p-4">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </button>

        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-2xl font-bold">{lead?.name?.charAt(0) || "E"}</span>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{lead?.name || "Emery Dokidis"}</h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{lead?.email || "emerydokidis@gmail.com"}</span>
              </div>

              <div className="text-gray-600">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3332 14.0999V16.5999C17.3341 16.832 17.2866 17.0617 17.1936 17.2744C17.1006 17.487 16.9643 17.6779 16.7933 17.8348C16.6222 17.9917 16.4203 18.1112 16.2005 18.1855C15.9806 18.2599 15.7477 18.2875 15.5165 18.2666C12.9522 17.988 10.489 17.1117 8.32486 15.7083C6.31139 14.4288 4.60431 12.7217 3.32486 10.7083C1.91651 8.53426 1.04007 6.05908 0.76653 3.48325C0.745705 3.25281 0.773092 3.02055 0.846947 2.80127C0.920801 2.58199 1.03951 2.38049 1.1955 2.2096C1.3515 2.03871 1.54137 1.90218 1.75302 1.80869C1.96468 1.7152 2.19348 1.6668 2.42486 1.66658H4.92486C5.32928 1.6626 5.72136 1.80582 6.028 2.06953C6.33464 2.33324 6.53493 2.69946 6.59153 3.09992C6.69705 3.89997 6.89274 4.68552 7.17486 5.44158C7.28698 5.73985 7.31125 6.06401 7.24478 6.37565C7.17832 6.68729 7.02392 6.97334 6.79986 7.19992L5.74153 8.25825C6.92783 10.3445 8.65524 12.072 10.7415 13.2583L11.7999 12.1999C12.0264 11.9759 12.3125 11.8215 12.6241 11.755C12.9358 11.6885 13.2599 11.7128 13.5582 11.8249C14.3143 12.107 15.0998 12.3027 15.8999 12.4083C16.3047 12.4654 16.6744 12.6693 16.9386 12.9812C17.2029 13.2931 17.3433 13.6912 17.3332 14.0999Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span>{lead?.phone || "+979970174715"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-3">Change Status</h3>

          <div className="relative w-full sm:w-80">
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white"
            >
              <span
                className={`${status === "Pending"
                  ? "text-orange-600"
                  : status === "Completed"
                    ? "text-green-600"
                    : status === "In Progress"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
              >
                {status}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {isStatusOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
              >
                {statusOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleStatusChange(option)}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-50 ${status === option ? "bg-gray-50" : ""}`}
                  >
                    <span
                      className={`${option === "Pending"
                        ? "text-orange-600"
                        : option === "Completed"
                          ? "text-green-600"
                          : option === "In Progress"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                    >
                      {option}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

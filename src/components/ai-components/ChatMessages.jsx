"use client"

import { motion } from "framer-motion"

export default function ChatMessages({ messages, userProfile, isTyping }) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          {message.sender === "ai" && (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
              <img src="/ai.png" alt="" />
            </div>
          )}

          <div
            className={`max-w-[70%] rounded-lg p-4 ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-blue-50 text-gray-800"
              }`}
          >
            <p className="whitespace-pre-line">{message.text}</p>
          </div>

          {message.sender === "user" && (
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden ml-3 flex-shrink-0">
              <img src={"/assets/profile.svg"} alt="User avatar" className="w-full h-full object-cover" />
            </div>
          )}
        </motion.div>
      ))}

      {isTyping && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 text-gray-800">
            <div className="flex space-x-1">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

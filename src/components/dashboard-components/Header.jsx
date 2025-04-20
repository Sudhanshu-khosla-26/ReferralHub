"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Header({ user }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <motion.h1
          className="text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import { motion } from "framer-motion"

export default function Toggle({ label, description, checked, onChange, className = "" }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        <h3 className="text-sm font-medium text-gray-900">{label}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <button
        type="button"
        className={`${
          checked ? "bg-blue-500" : "bg-gray-200"
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
      >
        <span className="sr-only">Toggle</span>
        <motion.span
          layout
          className={`${
            checked ? "translate-x-5" : "translate-x-0"
          } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        />
      </button>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

export default function EngagementStrategies() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start"
      >
        <div className="p-2 bg-blue-100 rounded-full mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <div>
          <div className="font-medium text-blue-800">
            AI suggests: This customer hasn't interacted in 30 days. Send a reminder
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recommended Actions</h3>

          <motion.div whileHover={{ scale: 1.02 }} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
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
                </div>
                <div>
                  <div className="font-medium">Send follow-up email</div>
                  <p className="text-sm text-gray-600 mt-1">Remind about the referral program benefits</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">Send Now</button>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="p-2 bg-orange-100 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Send SMS reminder</div>
                  <p className="text-sm text-gray-600 mt-1">Quick reminder about pending rewards</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">Send Now</button>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Schedule a call</div>
                  <p className="text-sm text-gray-600 mt-1">Discuss new referral opportunities</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">Schedule</button>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Engagement History</h3>

          <div className="border rounded-lg p-4">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Email sent</div>
                    <div className="text-gray-500 mt-1">Mar 25, 2025 - Program details & signup link</div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Call completed</div>
                    <div className="text-gray-500 mt-1">Mar 30, 2025 - Discussed referral bonuses</div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">SMS sent</div>
                    <div className="text-gray-500 mt-1">Mar 20, 2025 - Reminder about referral program</div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Email sent</div>
                    <div className="text-gray-500 mt-1">Mar 10, 2025 - Program details & signup link</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="border rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-2">Engagement Notes</h4>
            <textarea
              className="w-full border rounded-md p-2 text-sm"
              rows="4"
              placeholder="Add notes about engagement strategy..."
            ></textarea>
            <div className="flex justify-end mt-2">
              <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md">Save Notes</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

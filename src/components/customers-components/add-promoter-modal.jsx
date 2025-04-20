"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AddPromoterModal({ onClose, activeTab, setActiveTab }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailId: "",
  })
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const simulateUpload = () => {
    setUploadedFile({
      name: "Leads.csv",
      size: "428KB",
    })

    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)

      if (progress >= 70) {
        clearInterval(interval)
      }
    }, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
      }}
      className="fixed  inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-lg h-max"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Choose How You Want to Add Customers</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => handleTabChange("manual")}
                className={`pb-2 px-4 ${activeTab === "manual" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
              >
                Add Manually
              </button>
              <button
                onClick={() => handleTabChange("csv")}
                className={`pb-2 px-4 ${activeTab === "csv" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
              >
                Upload CSV File
              </button>
              <button
                onClick={() => handleTabChange("zapier")}
                className={`pb-2 px-4 ${activeTab === "zapier" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
              >
                Sync with Zapier
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "manual" && (
              <motion.div
                key="manual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      placeholder="Enter Email ID"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "csv" && (
              <motion.div
                key="csv"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <p className="mt-2 text-lg font-medium">Drag and drop files here</p>
                  <p className="text-gray-500">or</p>
                  <button onClick={simulateUpload} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                    Browse Files
                  </button>
                </div>

                {uploadedFile && (
                  <div className="border rounded-lg p-3 flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-md mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{uploadedFile.name}</div>
                          <div className="text-xs text-gray-500">{uploadedFile.size}</div>
                        </div>
                        <button className="text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                      </div>
                      <div className="mt-1 text-right text-xs text-gray-500">{uploadProgress}%</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "zapier" && (
              <motion.div
                key="zapier"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
                  <p className="text-lg">Automatically sync your customer data from your CRM using Zapier</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Connect with Zapier</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

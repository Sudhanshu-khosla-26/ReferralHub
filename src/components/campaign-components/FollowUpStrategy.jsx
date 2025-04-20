"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FollowUpStrategy({ steps, onAddStep, onRemoveStep, onUpdateStep }) {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editContent, setEditContent] = useState("")

  const handleEdit = (index, content) => {
    setEditingIndex(index)
    setEditContent(content || "")
  }

  const handleSaveEdit = (index, type) => {
    const updatedStep = { ...steps[index], content: editContent }
    onUpdateStep(index, updatedStep)
    setEditingIndex(null)
  }

  const handleChangeDays = (index, days) => {
    const updatedStep = { ...steps[index], days }
    onUpdateStep(index, updatedStep)
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {steps.map((step, index) => (
          <motion.div
            key={`step-${index}`}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center space-y-2 ">
              {/* Timeline connector */}
              {/* {index > 0 && <div className="absolute left-[22px] top-[-30px] h-[30px] w-0.5 bg-gray-300"></div>} */}

              {/* Step content */}
              <div className="flex w-[250px]  items-center bg-white  p-2  ">
                {/* Step icon */}
                <div
                  className={`mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${step.type === "sms"
                    ? "bg-green-100 text-green-600"
                    : step.type === "email"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {step.type === "sms" ? (
                    <img src="/sms.svg" alt="" />
                  ) : step.type === "email" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ) : (
                    <img src="/clock.svg" alt="" />

                  )}
                </div>

                {/* Step details */}
                <div className="flex-1">
                  {step.type === "wait" ? (
                    <div className="flex items-center rounded-lg bg-white p-3">
                      <span className="mr-2 font-medium">Wait- 5 days</span>

                    </div>
                  ) : (
                    <div className="rounded-lg  p-3">
                      {editingIndex === index ? (
                        <div className="flex flex-col space-y-2">
                          <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full rounded-md border border-gray-300 p-2 text-sm"
                            rows={3}
                          ></textarea>
                          <div className="flex justify-end space-x-2">
                            <button
                              className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200"
                              onClick={() => setEditingIndex(null)}
                            >
                              Cancel
                            </button>
                            <button
                              className="rounded-md bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
                              onClick={() => handleSaveEdit(index, step.type)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span className="font-medium capitalize">{step.type}</span>

                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="ml-4 flex space-x-2">
                  {step.type !== "wait" && (
                    <button
                      className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      onClick={() => handleEdit(index, step.content)}
                    >
                      <img src="/edit.svg" alt="" />
                    </button>
                  )}
                  <button
                    className="rounded-full p-1 text-red-400 hover:bg-red-50 hover:text-red-600"
                    onClick={() => onRemoveStep(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Add step buttons */}
      <div className="mt-4 flex justify-center space-x-3">
        <motion.button
          className="flex items-center rounded-md bg-green-100 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-200"
          onClick={() => onAddStep("sms")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414L11.414 11l3.293 3.293a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 11 5.293 7.707a1 1 0 010-1.414z" />
          </svg>
          Add SMS
        </motion.button>
        <motion.button
          className="flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
          onClick={() => onAddStep("email")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Add Email
        </motion.button>
        <motion.button
          className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          onClick={() => onAddStep("wait")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Add Wait
        </motion.button>
      </div>
    </div >
  )
}

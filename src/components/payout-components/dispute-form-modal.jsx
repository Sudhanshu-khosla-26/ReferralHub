"use client"

import { useState, useEffect, useRef } from "react"
import { X, Upload } from "lucide-react"

export function DisputeFormModal({ payout, onClose }) {
  const [reason, setReason] = useState("")
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    // Add animation class when component mounts
    const modal = document.getElementById("dispute-form-modal")
    setTimeout(() => {
      modal.classList.add("opacity-100")
      modal.classList.remove("opacity-0", "translate-y-4")
    }, 10)

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Submitting dispute", { payout, reason, files })

    // Show success animation
    const modal = document.getElementById("dispute-form-modal")
    modal.classList.add("opacity-0", "translate-y-4")

    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div
        id="dispute-form-modal"
        className="bg-white rounded-lg w-full max-w-md transform transition-all duration-300 opacity-0 translate-y-4"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Dispute Form</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <div>
            <label className="block text-gray-600 mb-2">Payout ID</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg bg-gray-50" value={payout.id} readOnly />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Promoter Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50"
              value={payout.promoterName}
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Reason for Dispute</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write here..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Upload Evidence</label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-10 h-10 text-blue-500 mb-2" />
              <p className="text-center mb-2">Drag and drop files here</p>
              <p className="text-center text-gray-500 text-sm mb-4">or</p>
              <button
                type="button"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={handleBrowseClick}
              >
                Browse Files
              </button>
              <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileChange} />
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              Submit Dispute Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Button from "../ui/button.jsx"
import FileUpload from "../ui/file-upload.jsx"

export default function CustomerDataStep({ data, setData, onNext }) {
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleFileSelect = (file) => {
    setUploadedFile(file)
    setData({
      ...data,
      csvUploaded: true,
      fileName: file.name,
      fileSize: Math.round(file.size / 1024) + "KB",
    })
    localStorage.setItem("customerdata", JSON.stringify({ ...data, csvUploaded: true, fileName: file.name, fileSize: Math.round(file.size / 1024) + "KB" }))
  }

  const handleConnectZapier = () => {
    setData({
      ...data,
      zapierConnected: true,
    })

    localStorage.setItem("customerdata", JSON.stringify({ ...data, zapierConnected: true }))
  }

  const handleDisconnectZapier = () => {
    setData({
      ...data,
      zapierConnected: false,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Import Customer Data: Sync with Zapier or Upload CSV</h2>
      </div>

      {data.zapierConnected ? (
        <div className="space-y-4">
          <div className="text-center text-green-500 font-medium">Zapier Integration Connected Successfully!</div>

          <Button variant="secondary" onClick={handleDisconnectZapier} className="w-full">
            Disconnect with Zapier
          </Button>
        </div>
      ) : (
        <Button onClick={handleConnectZapier} className="w-full">
          Connect with Zapier
        </Button>
      )}

      <div className="text-center text-gray-500">or</div>

      {data.csvUploaded ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{data.fileName}</p>
              <p className="text-sm text-gray-500">{data.fileSize}</p>
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setUploadedFile(null)}
              >
                Re-upload
              </button>
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center p-1.5 border border-transparent text-xs font-medium rounded-md text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => {
                  setUploadedFile(null)
                  setData({
                    ...data,
                    csvUploaded: false,
                    fileName: "",
                    fileSize: "",
                  })
                }}
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-md text-sm">
            CSV File Uploaded Successfully!
          </div>
        </div>
      ) : (
        <FileUpload onFileSelect={handleFileSelect} />
      )}

      <div className="pt-4">
        <Button onClick={onNext} disabled={!data.zapierConnected && !data.csvUploaded} className="w-full">
          Next
        </Button>
      </div>
    </div>
  )
}

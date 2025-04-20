"use client"

import { useState } from "react"

export default function AISettings() {
  const [aiSettings, setAiSettings] = useState({
    enableAI: true,
    autoRespond: true,
    leadQualification: false,
    dataAnalysis: true,
    contentGeneration: false,
  })

  const handleToggle = (setting) => {
    setAiSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-4">AI Assistant Configuration</h2>
          <p className="text-gray-500">Configure how the AI assistant works with your account and campaigns.</p>
        </div>

        <div className="space-y-4">
          {/* Enable AI */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div>
              <h3 className="font-medium">Enable AI Assistant</h3>
              <p className="text-gray-500 text-sm">Allow AI to help optimize your campaigns and provide insights</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={aiSettings.enableAI}
                onChange={() => handleToggle("enableAI")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          {/* Auto Respond */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div>
              <h3 className="font-medium">Auto-Respond to Messages</h3>
              <p className="text-gray-500 text-sm">Let AI respond to common customer inquiries automatically</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={aiSettings.autoRespond}
                onChange={() => handleToggle("autoRespond")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          {/* Lead Qualification */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div>
              <h3 className="font-medium">AI Lead Qualification</h3>
              <p className="text-gray-500 text-sm">Automatically score and qualify leads based on behavior patterns</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={aiSettings.leadQualification}
                onChange={() => handleToggle("leadQualification")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          {/* Data Analysis */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div>
              <h3 className="font-medium">AI Data Analysis</h3>
              <p className="text-gray-500 text-sm">Generate insights and recommendations from your campaign data</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={aiSettings.dataAnalysis}
                onChange={() => handleToggle("dataAnalysis")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          {/* Content Generation */}
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div>
              <h3 className="font-medium">AI Content Generation</h3>
              <p className="text-gray-500 text-sm">Generate campaign content and messaging suggestions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={aiSettings.contentGeneration}
                onChange={() => handleToggle("contentGeneration")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-6">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors transform hover:scale-105 duration-200">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

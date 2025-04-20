"use client"

import { useState } from "react"

export default function EmailPhoneSetup() {
  const [emailOption, setEmailOption] = useState("system")
  const [phoneOption, setPhoneOption] = useState("system")

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
      {/* Email Settings */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">Global Email Sending Address</h2>
        <p className="text-gray-500 mb-6">
          Choose how your outgoing emails (referral links, follow-ups, etc.) are sent from the platform.
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <input
                type="radio"
                id="system-email"
                name="email-option"
                checked={emailOption === "system"}
                onChange={() => setEmailOption("system")}
                className="w-4 h-4 text-blue-600"
              />
            </div>
            <div>
              <label htmlFor="system-email" className="font-medium">
                Use System Email
              </label>
              <p className="text-gray-500 text-sm mt-1">
                Emails will be sent using ReferralHub's default system address (e.g., notify@ReferralHub.app).
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <input
                type="radio"
                id="custom-email"
                name="email-option"
                checked={emailOption === "custom"}
                onChange={() => setEmailOption("custom")}
                className="w-4 h-4 text-blue-600"
              />
            </div>
            <div>
              <label htmlFor="custom-email" className="font-medium">
                Connect Your Custom Email Domain
              </label>
              <p className="text-gray-500 text-sm mt-1">
                Improve deliverability and brand recognition by sending from your own domain (e.g.,
                you@yourcompany.com).
              </p>
              <button className="mt-3 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors">
                Connect Email Domain
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SMS Settings */}
      <div className="border-t pt-10">
        <h2 className="text-xl font-medium text-gray-800 mb-2">Global SMS Sending Number</h2>
        <p className="text-gray-500 mb-6">
          Choose how SMS messages (referral links, updates, rewards) are sent to your customers.
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <input
                type="radio"
                id="system-phone"
                name="phone-option"
                checked={phoneOption === "system"}
                onChange={() => setPhoneOption("system")}
                className="w-4 h-4 text-blue-600"
              />
            </div>
            <div>
              <label htmlFor="system-phone" className="font-medium">
                Use System Phone Number
              </label>
              <p className="text-gray-500 text-sm mt-1">
                Messages will be sent from a standard number owned by ReferralHub.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <input
                type="radio"
                id="custom-phone"
                name="phone-option"
                checked={phoneOption === "custom"}
                onChange={() => setPhoneOption("custom")}
                className="w-4 h-4 text-blue-600"
              />
            </div>
            <div>
              <label htmlFor="custom-phone" className="font-medium">
                Connect Your Own Phone Number
              </label>
              <p className="text-gray-500 text-sm mt-1">
                Use a verified number for better brand trust and consistency.
              </p>
              <button className="mt-3 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors">
                Connect Phone Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

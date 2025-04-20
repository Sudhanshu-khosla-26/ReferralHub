"use client"

import { motion } from "framer-motion"

export default function CampaignForm({
  formData,
  activeTab,
  activeSettingsTab,
  onInputChange,
  onCheckboxChange,
  onSave,
  onCancel,
  children,
}) {



  return (



    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
        <div className="mb-6">
          <label htmlFor="campaignName" className="mb-2 block text-sm font-medium text-gray-700">
            Campaign Name
          </label>
          <input
            type="text"
            id="campaignName"
            name="campaignName"
            value={formData.campaignName}
            onChange={onInputChange}
            className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Summer Referral Special"
          />
        </div>

        {activeTab === "newPromoter" && activeSettingsTab === "promoterSettings" ? (
          <>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Reward Type<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  {/* <button
                    type="button"
                    className={`flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-medium ${
                      formData.rewardType === "discount"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => onInputChange({ target: { name: "rewardType", value: "discount" } })}
                  >
                    Discount
                  </button> */}
                  <button
                    type="button"
                    className={`flex-1 rounded-lg px-4 py-1 text-center text-sm font-medium ${formData.rewardType === "points"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    onClick={() => onInputChange({ target: { name: "rewardType", value: "points" } })}
                  >
                    Points
                    <span className="ml-1 text-xs text-gray-500"><br />($1 is equivalent to 10 points)</span>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="rewardValue" className="mb-2 block text-sm font-medium text-gray-700">
                  Reward Value <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="rewardValue"
                  name="rewardValue"
                  value={formData.rewardValue}
                  onChange={onInputChange}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder={formData.rewardType === "discount" ? "20%" : "200 points"}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="promoterMessage" className="mb-2 block text-sm font-medium text-gray-700">
                Promoter Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="promoterMessage"
                name="promoterMessage"
                value={formData.promoterMessage}
                onChange={onInputChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Hey! Share this with your friends and get $20 for each successful signup!"
              ></textarea>
            </div>
          </>
        )
          :
          (
            <>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Reward Type<span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-medium ${formData.rewardType === "discount"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      onClick={() => onInputChange({ target: { name: "rewardType", value: "discount" } })}
                    >
                      Discount
                    </button>

                  </div>
                </div>

                <div>
                  <label htmlFor="rewardValue" className="mb-2 block text-sm font-medium text-gray-700">
                    Reward Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="rewardValue"
                    name="rewardValue"
                    value={formData.rewardValue}
                    onChange={onInputChange}
                    className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={formData.rewardType === "discount" ? "20%" : "200 points"}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="promoterMessage" className="mb-2 block text-sm font-medium text-gray-700">
                  Promoter Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="promoterMessage"
                  name="promoterMessage"
                  value={formData.promoterMessage}
                  onChange={onInputChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Hey! Share this with your friends and get $20 for each successful signup!"
                ></textarea>
              </div>
            </>
          )}


        <>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Reward Type<span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className={`flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-medium ${formData.rewardType === "discount"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => onInputChange({ target: { name: "rewardType", value: "discount" } })}
                >
                  Discount
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-medium ${formData.rewardType === "points"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => onInputChange({ target: { name: "rewardType", value: "points" } })}
                >
                  Points
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="rewardValue" className="mb-2 block text-sm font-medium text-gray-700">
                Reward Value <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="rewardValue"
                name="rewardValue"
                value={formData.rewardValue}
                onChange={onInputChange}
                className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder={formData.rewardType === "discount" ? "20%" : "200 points"}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="referredMessage" className="mb-2 block text-sm font-medium text-gray-700">
              Referred Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="referredMessage"
              name="referredMessage"
              value={formData.referredMessage}
              onChange={onInputChange}
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="You've been invited! Sign up now and get 15% off your first order"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="mb-2 flex items-center text-sm font-medium text-gray-700">
              Form Fields <span className="text-red-500">*</span>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
            <div className="mt-2 flex space-x-6 items-center space-y-2">
              <div className="flex  items-center">
                <input
                  type="checkbox"
                  id="fullName"
                  name="fullName"
                  checked={formData.formFields.fullName}
                  onChange={onCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="fullName" className="ml-2 text-sm text-gray-700">
                  Full Name
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailAddress"
                  name="emailAddress"
                  checked={formData.formFields.emailAddress}
                  onChange={onCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="emailAddress" className="ml-2 text-sm text-gray-700">
                  Email Address
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="phoneNumber"
                  name="phoneNumber"
                  checked={formData.formFields.phoneNumber}
                  onChange={onCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="phoneNumber" className="ml-2 text-sm text-gray-700">
                  Phone Number
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.formFields.agreeToTerms}
                  onChange={onCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                  Agree to Terms & Conditions & Opt-in
                </label>
              </div>
            </div>
          </div>
        </>


        {children}

      </div>

      {(activeTab === "newLeads" || activeTab === "newPromoter") && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-medium">Landing Page Preview</h3>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            {activeTab === "newLeads" ? (
              <img src="/ReferredSide.svg" alt="" />
            ) : (
              <img src="/ReferredSide.svg" alt="" />
            )}

            <div className="mt-8 flex justify-center space-x-3">

              <motion.button
                type="button"
                style={{
                  width: "250px", borderRadius: "10px",
                }}
                className="rounded-lg bg-gradient-to-r from-[rgba(48,90,255,0.8)] to-[#B5D2FF]   px-5 py-2.5 text-sm font-medium text-white "
                onClick={onSave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit
              </motion.button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

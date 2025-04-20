"use client"

import { motion } from "framer-motion"

export default function CampaignList({ onCampaignClick, campaigns, onCreateCampaign, onEditCampaign, onDeleteCampaign }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between ">
        <motion.button
          style={{ borderRadius: "8px", background: "linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)" }}
          className="flex items-center rounded-lg px-4 py-2 text-white transition-colors "
          onClick={onCreateCampaign}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Create New Campaign
        </motion.button>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-64 rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <button className="flex items-center rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-500">
        <span className="font-medium text-blue-600">{campaigns.length} Campaigns</span> •{" "}
        <span>{campaigns.filter((c) => c.status === "active").length} Active</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {campaigns.map((campaign) => (
          <motion.div
            key={campaign.id}
            onClick={() => onCampaignClick(campaign)}
            className="rounded-lg border border-gray-200 bg-white shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="border-b border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{campaign.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${campaign.status === "active" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                    }`}
                >
                  {campaign.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{campaign.dateRange}</p>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-100 p-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">Referrals</p>
                <p className="text-xl font-bold">{campaign.stats.referrals}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Conversion</p>
                <p className="text-xl font-bold">{campaign.stats.conversion}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">ROI</p>
                <p className="text-xl font-bold">{campaign.stats.roi}</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{campaign.recommendation}</p>
              </div>

              <div className="flex space-x-2">
                <button className="text-red-500 hover:text-red-700" onClick={() => onDeleteCampaign(campaign.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => onEditCampaign(campaign.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

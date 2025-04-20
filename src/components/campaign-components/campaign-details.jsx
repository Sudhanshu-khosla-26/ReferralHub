"use client"

import { useState } from "react"

export default function CampaignDetails({ campaign, onBack }) {
  const [timeRange, setTimeRange] = useState("Last 1 year")

  // Mock data for charts
  const monthlyClicks = [
    { month: "Jan", clicks: 3000 },
    { month: "Feb", clicks: 2500 },
    { month: "Mar", clicks: 700 },
    { month: "Apr", clicks: 1000 },
    { month: "May", clicks: 2800 },
    { month: "Jun", clicks: 700 },
    { month: "Jul", clicks: 1900 },
    { month: "Aug", clicks: 1000 },
    { month: "Sep", clicks: 2800 },
    { month: "Oct", clicks: 3000 },
    { month: "Nov", clicks: 1000 },
    { month: "Dec", clicks: 1900 },
  ]

  const conversionData = {
    referralsSent: 57,
    converted: 42,
  }

  const channelData = [
    { name: "Facebook", percentage: 78 },
    { name: "Twitter", percentage: 45 },
    { name: "LinkedIn", percentage: 23 },
  ]

  const maxClicks = Math.max(...monthlyClicks.map((item) => item.clicks))

  return (
    <>
      <header className="w-fit px-6 py-1  flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-3 flex items-center text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="ml-1">Back</span>
          </button>

        </div>

      </header>
      <div className="p-6 space-y-6">

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Promoters</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold">{campaign?.stats?.totalPromoters}</p>
                <span className="ml-2 text-xs font-medium text-green-500">+12% vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Conversion rate</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold">{campaign?.stats?.conversionRate}</p>
                <span className="ml-2 text-xs font-medium text-red-500">-2.4% vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Revenue Generated</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold">{campaign?.stats?.revenueGenerated}</p>
                <span className="ml-2 text-xs font-medium text-green-500">+8.7% vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="22" y1="11" x2="16" y2="11"></line>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">New Leads</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold">{campaign?.stats?.newLeads}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 col-span-2">
            <h2 className="text-lg font-medium mb-4">Total Link Clicks</h2>
            <div className="h-64">
              <div className="flex h-full items-end">
                {monthlyClicks.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-4/5 bg-green-200 rounded-t"
                      style={{ height: `${(item.clicks / maxClicks) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Conversion Success Rate</h2>
              <div className="flex justify-center">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EBF2FF" strokeWidth="15" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#4F83F1"
                      strokeWidth="15"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * conversionData.converted) / 100}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{conversionData.converted}%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm">Referrals sent {conversionData.referralsSent}%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-200 mr-2"></span>
                  <span className="text-sm">Converted {conversionData.converted}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg px-6">
              <h2 className="text-lg font-medium mb-4">Top Performing Channel</h2>
              <div className="space-y-3 flex flex-1">
                {channelData.map((channel, index) => (
                  <div key={index} className="space-y-1 flex justify-evenly">
                    <div
                      className={`h-10 w-fit px-4 py-6 rounded-lg flex  flex-col items-center justify-center ${index === 0
                        ? "bg-orange-100 text-orange-800"
                        : index === 1
                          ? "bg-pink-100 text-pink-800"
                          : "bg-blue-100 text-blue-800"
                        }`}

                    >
                      <span>{channel.name}</span>

                      <span className="font-medium">{channel.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Campaign Performance</h2>
            <div className="relative">
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center">
                <span>{timeRange}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-64 relative">
            {/* This would be a chart in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full">
                <svg viewBox="0 0 1000 300" className="w-full h-full">
                  {/* Revenue line */}
                  <path
                    d="M0,250 C50,220 100,180 150,200 C200,220 250,180 300,150 C350,120 400,180 450,150 C500,120 550,100 600,120 C650,140 700,100 750,80 C800,60 850,100 900,80 C950,60 1000,80 1000,80"
                    fill="none"
                    stroke="#4F83F1"
                    strokeWidth="3"
                  />

                  {/* Conversion line */}
                  <path
                    d="M0,280 C50,260 100,240 150,250 C200,260 250,240 300,230 C350,220 400,240 450,230 C500,220 550,210 600,220 C650,230 700,210 750,200 C800,190 850,210 900,200 C950,190 1000,200 1000,200"
                    fill="none"
                    stroke="#F9A03F"
                    strokeWidth="3"
                  />

                  {/* August marker */}
                  <line x1="750" y1="0" x2="750" y2="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
                  <circle cx="750" cy="80" r="6" fill="#4F83F1" />
                  <circle cx="750" cy="200" r="6" fill="#F9A03F" />

                  <rect x="730" y="70" width="60" height="40" rx="4" fill="#4B5563" />
                  <text x="740" y="90" fill="white" fontSize="10">
                    $520
                  </text>
                  <text x="740" y="105" fill="white" fontSize="10">
                    50K
                  </text>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-6">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm">Revenue</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
              <span className="text-sm">Conversion</span>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

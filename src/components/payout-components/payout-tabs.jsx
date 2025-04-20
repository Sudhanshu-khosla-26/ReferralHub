"use client"

export function PayoutTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "all-payouts", label: "All Payouts" },
    { id: "disputes", label: "Disputes" },
    { id: "payout-settings", label: "Payout Settings" },
  ]

  return (
    <div className="flex w-fit border-1 border-gray-300 rounded-lg overflow-hidden mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`w-[200px] py-2 px-4 text-center transition-colors duration-200 ${activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}



import { useState } from "react"
import { Bell, User } from "lucide-react"
import { PayoutStats } from "./payout-stats"
import { PayoutTabs } from "./payout-tabs"
import { AllPayouts } from "./all-payouts"
import { Disputes } from "./disputes"
import { PayoutSettings } from "./payout-settings"
import { ViewDetailsModal } from "./view-details-modal"
import { DisputeDetailsModal } from "./dispute-details-modal"
import { DisputeFormModal } from "./dispute-form-modal"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("disputes")
  const [showViewDetails, setShowViewDetails] = useState(false)
  const [showDisputeDetails, setShowDisputeDetails] = useState(false)
  const [showDisputeForm, setShowDisputeForm] = useState(false)
  const [selectedPayout, setSelectedPayout] = useState(null)
  const [selectedDispute, setSelectedDispute] = useState(null)

  const handleViewDetails = (payout) => {
    setSelectedPayout(payout)
    setShowViewDetails(true)
  }

  const handleViewDisputeDetails = (dispute) => {
    setSelectedDispute(dispute)
    setShowDisputeDetails(true)
  }

  const handleRequestDispute = (payout) => {
    setSelectedPayout(payout)
    setShowDisputeForm(true)
  }

  return (
    <div className="flex-1 overflow-auto">


      <div className="p-6">
        <PayoutStats />

        <div className="mt-8">
          <PayoutTabs className="w-[400px]" activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "all-payouts" && <AllPayouts onViewDetails={handleViewDetails} />}

          {activeTab === "disputes" && <Disputes onViewDetails={handleViewDisputeDetails} />}

          {activeTab === "payout-settings" && <PayoutSettings />}
        </div>
      </div>

      {showViewDetails && (
        <ViewDetailsModal
          payout={selectedPayout}
          onClose={() => setShowViewDetails(false)}
          onRequestDispute={handleRequestDispute}
        />
      )}

      {showDisputeDetails && (
        <DisputeDetailsModal dispute={selectedDispute} onClose={() => setShowDisputeDetails(false)} />
      )}

      {showDisputeForm && <DisputeFormModal payout={selectedPayout} onClose={() => setShowDisputeForm(false)} />}
    </div>
  )
}

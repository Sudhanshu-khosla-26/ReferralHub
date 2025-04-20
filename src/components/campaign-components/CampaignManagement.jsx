"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "../sidebar"
import Header from "../header"
import CampaignDetails from "./campaign-details"
import CampaignList from "./CampaignList"
import CampaignForm from "./CampaignForm"
import FollowUpStrategy from "./FollowUpStrategy"

export default function CampaignManagement() {
  const [activeTab, setActiveTab] = useState("pastPromoter")
  const [activeSettingsTab, setActiveSettingsTab] = useState("promoterSettings")
  const [showForm, setShowForm] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Referral Program",
      dateRange: "5/31/2024 - 8/30/2024",
      status: "active",
      stats: {
        referrals: 245,
        conversion: "32%",
        roi: "287%",
        totalPromoters: 1234,
        conversionRate: "23.5%",
        revenueGenerated: "$12,345",
        newLeads: 500,
      },
      aiSuggestion: "Increase reward by 10% to boost conversion rates during peak season",
    },
    {
      id: 2,
      name: "Early Bird Special",
      dateRange: "8/20/2024 - 9/19/2024",
      status: "inactive",
      stats: {
        referrals: 300,
        conversion: "40%",
        roi: "320%",
        totalPromoters: 980,
        conversionRate: "18.7%",
        revenueGenerated: "$9,876",
        newLeads: 320,
      },
      aiSuggestion: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    },
  ])

  const [formData, setFormData] = useState({
    campaignName: "",
    rewardType: "discount",
    rewardValue: "",
    referredMessage: "You've been invited! Sign up now and get 15% off your first order",
    formFields: {
      fullName: true,
      emailAddress: true,
      phoneNumber: false,
      agreeToTerms: true,
    },
    followUpStrategy: [
      { type: "sms", content: "Thanks for signing up!", wait: 0 },
      { type: "wait", days: 5 },
      { type: "email", content: "Here's what you can do with our product", wait: 0 },
      { type: "wait", days: 2 },
      { type: "sms", content: "Any questions about our service?", wait: 0 },
      { type: "wait", days: 3 },
      { type: "sms", content: "Last chance for your special offer!", wait: 0 },
    ],
    promoterMessage: "Hey! Share this with your friends and get $20 for each successful signup!",
  })

  const handleCreateCampaign = () => {
    setShowForm(true)
    setActiveTab("newPromoter")
    setActiveSettingsTab("promoterSettings")
    setFormData({
      campaignName: "",
      rewardType: "points",
      rewardValue: "",
      referredMessage: "You've been invited! Sign up now and get 15% off your first order",
      formFields: {
        fullName: true,
        emailAddress: true,
        phoneNumber: false,
        agreeToTerms: true,
      },
      followUpStrategy: [
        { type: "sms", content: "Thanks for signing up!", wait: 0 },
        { type: "wait", days: 5 },
        { type: "email", content: "Here's what you can do with our product", wait: 0 },
        { type: "wait", days: 2 },
        { type: "sms", content: "Any questions about our service?", wait: 0 },
        { type: "wait", days: 3 },
        { type: "sms", content: "Last chance for your special offer!", wait: 0 },
      ],
      promoterMessage: "Hey! Share this with your friends and get $20 for each successful signup!",
    })
  }

  const handleEditCampaign = (id) => {
    const campaign = campaigns.find((c) => c.id === id)
    if (campaign) {
      setFormData({
        ...formData,
        campaignName: campaign.name,
      })
      setShowForm(true)
      setActiveTab("newPromoter")
    }
  }

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign)
  }

  const handleBackToCampaigns = () => {
    setSelectedCampaign(null)
  }


  const handleSaveCampaign = () => {
    // In a real app, you would save to a database
    const newCampaign = {
      id: campaigns.length + 1,
      name: formData.campaignName,
      dateRange: "5/31/2024 - 8/30/2024", // This would be dynamic in a real app
      status: "active",
      referrals: 0,
      conversion: "0%",
      roi: "0%",
      recommendation: "",
    }

    setCampaigns([...campaigns, newCampaign])
    setShowForm(false)
  }

  const handleDeleteCampaign = (id) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      formFields: {
        ...formData.formFields,
        [name]: checked,
      },
    })
  }

  const handleAddStep = (type) => {
    let newStep
    if (type === "sms") {
      newStep = { type: "sms", content: "", wait: 0 }
    } else if (type === "email") {
      newStep = { type: "email", content: "", wait: 0 }
    } else if (type === "wait") {
      newStep = { type: "wait", days: 2 }
    }

    setFormData({
      ...formData,
      followUpStrategy: [...formData.followUpStrategy, newStep],
    })
  }

  const handleRemoveStep = (index) => {
    const newStrategy = [...formData.followUpStrategy]
    newStrategy.splice(index, 1)
    setFormData({
      ...formData,
      followUpStrategy: newStrategy,
    })
  }

  const handleUpdateStep = (index, updatedStep) => {
    const newStrategy = [...formData.followUpStrategy]
    newStrategy[index] = updatedStep
    setFormData({
      ...formData,
      followUpStrategy: newStrategy,
    })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Create & Manage Referral Campaigns" />

        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {!showForm ?
              selectedCampaign ? (
                <motion.div
                  key="campaign-details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 overflow-auto"
                >
                  <CampaignDetails campaign={selectedCampaign} onBack={handleBackToCampaigns} />
                </motion.div>

              ) : (
                <motion.div
                  key="campaign-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex space-x-2">
                    <TabButton

                      active={activeTab === "pastPromoter"}
                      onClick={() => setActiveTab("pastPromoter")}
                      label="Past Promoters"
                    />
                    <TabButton

                      active={activeTab === "newPromoter"}
                      onClick={() => { setActiveTab("newPromoter"); handleCreateCampaign(); }}
                      label="New Promoters"
                    />
                    <TabButton
                      active={activeTab === "newLeads"}
                      onClick={() => { setActiveTab("newLeads"); handleCreateCampaign(); }}
                      label="New Leads"
                    />
                  </div>

                  <CampaignList
                    campaigns={campaigns}
                    onCreateCampaign={handleCreateCampaign}
                    onEditCampaign={handleEditCampaign}
                    onDeleteCampaign={handleDeleteCampaign}
                    onCampaignClick={handleCampaignClick}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="campaign-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex space-x-2">
                    <TabButton
                      active={activeTab === "pastPromoter"}
                      onClick={() => { setShowForm(false); setActiveTab("pastPromoter") }}
                      label="Past Promoter"
                    />
                    <TabButton
                      active={activeTab === "newPromoter"}
                      onClick={() => setActiveTab("newPromoter")}
                      label="New Promoter"
                    />
                    <TabButton
                      active={activeTab === "newLeads"}
                      onClick={() => { setActiveTab("newLeads"); }}
                      label="New Leads"
                    />
                  </div>

                  {
                    activeTab === "newLeads" ? (
                      <>
                        <div className="bg-blue-50 font-medium text-xl p-6 w-full">Leads Settings</div>
                        <div className="rounded-lg mt-4 bg-blue-50 p-6">
                          <h3 className="mb-4 text-lg font-medium">
                            Follow-Up Strategy<span className="text-red-500">*</span>
                          </h3>
                          <FollowUpStrategy
                            steps={formData.followUpStrategy}
                            onAddStep={handleAddStep}
                            onRemoveStep={handleRemoveStep}
                            onUpdateStep={handleUpdateStep}
                          />
                        </div>
                      </>

                    )
                      :
                      <>
                        <div className="mb-6 flex space-x-2">
                          <TabButton
                            active={activeSettingsTab === "promoterSettings"}
                            onClick={() => {
                              setActiveSettingsTab("promoterSettings")
                              handleInputChange({ target: { name: "rewardType", value: "points" } });
                            }
                            }
                            label="Promoter Settings"
                          />
                          <TabButton
                            active={activeSettingsTab === "leadsSettings"}
                            onClick={() => {
                              setActiveSettingsTab("leadsSettings");
                              handleInputChange({ target: { name: "rewardType", value: "discount" } });
                            }}
                            label="Leads Settings"
                          />
                        </div>


                        <CampaignForm
                          formData={formData}
                          activeTab={activeTab}
                          activeSettingsTab={activeSettingsTab}
                          onInputChange={handleInputChange}
                          onCheckboxChange={handleCheckboxChange}
                          onSave={handleSaveCampaign}
                          onCancel={() => setShowForm(false)}
                        >

                          <div className="mt-6">
                            <h3 className="mb-4 text-lg font-medium">
                              Follow-Up Strategy<span className="text-red-500">*</span>
                            </h3>
                            <div className="rounded-lg bg-blue-50 p-6">
                              <FollowUpStrategy
                                steps={formData.followUpStrategy}
                                onAddStep={handleAddStep}
                                onRemoveStep={handleRemoveStep}
                                onUpdateStep={handleUpdateStep}
                              />
                            </div>
                          </div>

                        </CampaignForm>
                      </>

                  }

                </motion.div>
              )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

function TabButton({ active, onClick, label }) {
  return (
    <button
      style={{ borderRadius: "8px", width: "240px" }}
      className={`relative  px-6 py-2 text-sm font-medium transition-colors border border-transparent rounded-lg ${active ? "bg-blue-100 text-blue-700" : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      onClick={onClick}
    >
      {label}
      {/* {active && (
        // <motion.div
        //   className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
        //   layoutId="activeTab"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 0.3 }}
        // />
      )} */}
    </button>
  )
}

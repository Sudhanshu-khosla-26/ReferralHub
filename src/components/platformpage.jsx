import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import Header from "./header"
import BusinessProfileStep from "../components/platform-forms/business-profile-step"
import CustomerDataStep from "./platform-forms/customer-data-step"
import AgentRulesStep from "./platform-forms/agent-rules-step"
import CampaignStep from "./platform-forms/campaign-step"
import ProgressTracker from "./progress-tracker"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function PlatformSetup() {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(0)
    const [completedSteps, setCompletedSteps] = useState([])
    const [businessProfile, setBusinessProfile] = useState({
        logo: null,
        description: "",
        name: "",
        email: "",
        phone: "",
        industry: "",
        services: "",
        products: "",
        companySize: "",
        city: "",
        state: "",
        zipCode: "",
    })

    const completed = localStorage.getItem("PlatformSetup")

    useEffect(() => {
        if (completed === "completed") {
            navigate("/")
        }
    }, [])


    const [customerData, setCustomerData] = useState({
        zapierConnected: false,
        csvUploaded: false,
        fileName: "",
        fileSize: "",
    })

    const [agentRules, setAgentRules] = useState({
        toneOfCommunication: "",
        responseStyle: "",
        autoOfferHelp: true,
        userInitiatedOnly: false,
    })

    const [campaign, setCampaign] = useState({
        name: "",
        promoterRewardType: "Points",
        promoterRewardValue: "",
        promoterMessage: "",
        leadsRewardType: "Discount",
        leadsRewardValue: "",
        referredMessage: "",
        formFields: {
            fullName: true,
            emailAddress: true,
            phoneNumber: false,
            agree: false,
        },
        promoterFollowUp: {
            type: "SMS",
            waitDays: 5,
            message: "",
        },
        leadsFollowUp: {
            type: "SMS",
            waitDays: 5,
            message: "",
        },
    })

    const steps = [
        {
            id: "business-profile",
            title: "Set Up Business Profile",
            component: BusinessProfileStep,
            data: businessProfile,
            setData: setBusinessProfile,
        },
        {
            id: "customer-data",
            title: "Sync Your Customer Data",
            component: CustomerDataStep,
            data: customerData,
            setData: setCustomerData,
        },
        {
            id: "agent-rules",
            title: "Set Up AI Agent Rules",
            component: AgentRulesStep,
            data: agentRules,
            setData: setAgentRules,
        },
        {
            id: "campaign",
            title: "Set Up First Campaign",
            component: CampaignStep,
            data: campaign,
            setData: setCampaign,
        },
    ]

    const handleNext = () => {

        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps([...completedSteps, currentStep])
        }

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handleStepClick = (index) => {
        if (index <= Math.max(...completedSteps) + 1 || completedSteps.includes(index - 1)) {
            setCurrentStep(index)
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar currentStep={currentStep} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title={"Platform Setup"} />

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="flex">
                            <div className="w-2/5 bg-blue-50 p-8">
                                <h2 className="text-xl font-semibold text-blue-600 mb-4">Get Started with ReferralHub</h2>
                                <p className="text-gray-600 mb-8">
                                    To get started with better referrals & rewards, complete your account setup in a few easy steps.
                                </p>

                                <ProgressTracker
                                    steps={steps}
                                    currentStep={currentStep}
                                    completedSteps={completedSteps}
                                    onStepClick={handleStepClick}
                                />
                            </div>

                            <div className="w-3/5 p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full"
                                    >
                                        {steps.map(
                                            (step, index) =>
                                                currentStep === index && (
                                                    <step.component
                                                        key={step.id}
                                                        data={step.data}
                                                        setData={step.setData}
                                                        onNext={handleNext}
                                                        isLastStep={index === steps.length - 1}
                                                    />
                                                ),
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

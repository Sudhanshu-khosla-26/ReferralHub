import { useState } from "react"
import Sidebar from "./sidebar"
import Header from "./header"
import UserProfile from "./settings-components/user-profile"
import BusinessProfile from "./settings-components/business-profile"
import AISettings from "./settings-components/ai-settings"
import EmailPhoneSetup from "./settings-components/email-phone-setup"
import SubscriptionUsage from "./settings-components/subscription-usage"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("User Profile")

    const tabs = ["User Profile", "Business Profile", "AI Settings", "Email & Phone Setup", "Subscription & Usage"]

    const renderContent = () => {
        switch (activeTab) {
            case "User Profile":
                return <UserProfile />
            case "Business Profile":
                return <BusinessProfile />
            case "AI Settings":
                return <AISettings />
            case "Email & Phone Setup":
                return <EmailPhoneSetup />
            case "Subscription & Usage":
                return <SubscriptionUsage />
            default:
                return <UserProfile />
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title={"Settings"} />
                <main className="flex-1 overflow-y-auto">
                    <div className="border-b">
                        <div className="flex space-x-1 px-6 py-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${activeTab === tab ? "bg-blue-50 text-blue-600 rounded-md" : "text-gray-500 hover:text-gray-700"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 animate-fadeIn">{renderContent()}</div>
                </main>
            </div>
        </div>
    )
}

import { useState } from "react"
import Sidebar from "./sidebar"
import LeadsList from "./leads-components/leads-list"
import LeadDetails from "./leads-components/lead-details"
import { Bell } from "lucide-react"
import { motion } from "framer-motion"
import Header from "./header"

export default function Lead() {
    const [currentView, setCurrentView] = useState("list")
    const [selectedLead, setSelectedLead] = useState(null)
    const [notification, setNotification] = useState(1)

    const handleViewProfile = (lead) => {
        setSelectedLead(lead)
        setCurrentView("details")
    }

    const handleBackToList = () => {
        setCurrentView("list")
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar currentPage="leads" />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header title={"Manage and monitor your leads"} />

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6">
                    {currentView === "list" ? (
                        <LeadsList onViewProfile={handleViewProfile} />
                    ) : (
                        <LeadDetails lead={selectedLead} onBack={handleBackToList} />
                    )}
                </main>
            </div>
        </div>
    )
}


import { useState } from "react"
import Sidebar from "./sidebar"
import PromotersList from "../components/customers-components/promoters-list"
import CustomerDetail from "../components/customers-components/customer-detail"
import AddPromoterModal from "../components/customers-components/add-promoter-modal"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../components/header"

export default function Dashboard() {
    const [currentView, setCurrentView] = useState("promoters")
    const [selectedPromoter, setSelectedPromoter] = useState(null)
    const [showAddModal, setShowAddModal] = useState(false)
    const [addModalTab, setAddModalTab] = useState("manual")
    const [notifications, setNotifications] = useState(1)

    const promotersData = [
        {
            id: 1,
            name: "Emery Dokidis",
            contact: "+979970174715",
            leads: 12,
            conversionRate: "50%",
            lastFollowUp: "28-4-2024",
            revenueGenerated: "$50",
            status: "Active",
        },
        {
            id: 2,
            name: "Kadin Lipshutz",
            contact: "+971501948279",
            leads: 8,
            conversionRate: "30%",
            lastFollowUp: "27-5-2024",
            revenueGenerated: "$900",
            status: "Active",
        },
        {
            id: 3,
            name: "Randy Culhane",
            contact: "+971501598978",
            leads: 15,
            conversionRate: "60%",
            lastFollowUp: "29-5-2024",
            revenueGenerated: "$1000",
            status: "Inactive",
        },
        {
            id: 4,
            name: "Jaxson Vaccaro",
            contact: "+971522503635",
            leads: 10,
            conversionRate: "45%",
            lastFollowUp: "30-6-2024",
            revenueGenerated: "$500",
            status: "Completed",
        },
        {
            id: 5,
            name: "Jocelyn Levin",
            contact: "+971554315300",
            leads: 6,
            conversionRate: "28%",
            lastFollowUp: "01-7-2024",
            revenueGenerated: "$1,500",
            status: "Inactive",
        },
        {
            id: 6,
            name: "Maren Septimus",
            contact: "+971525620832",
            leads: 18,
            conversionRate: "65%",
            lastFollowUp: "03-7-2024",
            revenueGenerated: "$2,000",
            status: "Completed",
        },
        {
            id: 7,
            name: "Haylie Saris",
            contact: "+971503328228",
            leads: 13,
            conversionRate: "58%",
            lastFollowUp: "05-7-2024",
            revenueGenerated: "$300",
            status: "Active",
        },
        {
            id: 8,
            name: "Randy Herwitz",
            contact: "+971554231522",
            leads: 12,
            conversionRate: "50%",
            lastFollowUp: "10-7-2024",
            revenueGenerated: "$600",
            status: "Inactive",
        },
    ]

    const customerData = {
        id: 1,
        name: "Emery Dokidis",
        email: "emerydokidis@gmail.com",
        phone: "+979970174715",
        status: "Active",
        stats: {
            totalReferrals: 24,
            conversionRate: "75%",
            revenueGenerated: "$1250",
            lastFollowUp: "28-4-2024",
        },
        referrals: [
            { id: 1, person: "Emery Dokidis", date: "28-4-2024", reward: "$20", status: "Completed" },
            { id: 2, person: "Kadin Lipshutz", date: "27-5-2024", reward: "$20", status: "Completed" },
            { id: 3, person: "Pending", date: "29-5-2024", reward: "—", status: "Pending" },
            { id: 4, person: "Jaxson Vaccaro", date: "30-6-2024", reward: "$20", status: "Completed" },
            { id: 5, person: "Pending", date: "01-7-2024", reward: "—", status: "Pending" },
            { id: 6, person: "Maren Septimus", date: "03-7-2024", reward: "$20", status: "Completed" },
            { id: 7, person: "Haylie Saris", date: "05-7-2024", reward: "$20", status: "Completed" },
            { id: 8, person: "Pending", date: "10-7-2024", reward: "—", status: "Pending" },
        ],
        interactions: [
            { id: 1, date: "Mar 30, 2025", time: "2:45 PM", type: "Call", notes: "Spoke about new referral bonuses" },
            { id: 2, date: "Mar 25, 2025", time: "11:30 AM", type: "Email", notes: "Sent program details & signup link" },
            { id: 3, date: "Mar 20, 2025", time: "1:15 PM", type: "SMS", notes: "Reminder about referral program rewards" },
            { id: 4, date: "Mar 19, 2025", time: "1:15 PM", type: "SMS", notes: "Reminder about referral program rewards" },
            { id: 5, date: "Mar 15, 2025", time: "1:15 PM", type: "SMS", notes: "Reminder about referral program rewards" },
            { id: 6, date: "Mar 10, 2025", time: "1:15 PM", type: "Email", notes: "Sent program details & signup link" },
            { id: 7, date: "Mar 08, 2025", time: "1:15 PM", type: "Email", notes: "Sent program details & signup link" },
            { id: 8, date: "Mar 05, 2025", time: "1:15 PM", type: "Call", notes: "Spoke about new referral bonuses" },
        ],
        rewards: [
            {
                id: 1,
                earnedOn: "Mar 30, 2025",
                type: "Discount Coupon",
                value: "20% Off",
                status: "Claimed",
                redeemedOn: "Mar 31, 2025",
            },
            {
                id: 2,
                earnedOn: "Mar 25, 2025",
                type: "Cash Bonus",
                value: "$50",
                status: "Claimed",
                redeemedOn: "Mar 26, 2025",
            },
            { id: 3, earnedOn: "Mar 20, 2025", type: "Cash Bonus", value: "$25", status: "Pending", redeemedOn: "—" },
            {
                id: 4,
                earnedOn: "Mar 19, 2025",
                type: "Cash Bonus",
                value: "$25",
                status: "Claimed",
                redeemedOn: "Mar 19, 2025",
            },
            { id: 5, earnedOn: "Mar 15, 2025", type: "Cash Bonus", value: "$25", status: "Pending", redeemedOn: "—" },
            {
                id: 6,
                earnedOn: "Mar 10, 2025",
                type: "Cash Bonus",
                value: "$50",
                status: "Claimed",
                redeemedOn: "Mar 12, 2025",
            },
            {
                id: 7,
                earnedOn: "Mar 08, 2025",
                type: "Discount Coupon",
                value: "20% Off",
                status: "Claimed",
                redeemedOn: "Mar 09, 2025",
            },
            {
                id: 8,
                earnedOn: "Mar 05, 2025",
                type: "Discount Coupon",
                value: "20% Off",
                status: "Pending",
                redeemedOn: "—",
            },
        ],
        contactInfo: {
            memberSince: "February 15, 2024",
            location: "San Francisco, CA",
            phone: "+979970174715",
            email: "emerydokidis@gmail.com",
            timezone: "Pacific Time (PT)",
        },
    }

    const handlePromoterClick = (promoter) => {
        setSelectedPromoter(promoter)
        setCurrentView("customerDetail")
    }

    const handleBackClick = () => {
        setCurrentView("promoters")
        setSelectedPromoter(null)
    }

    const handleAddPromoter = () => {
        setShowAddModal(true)
    }

    const handleCloseModal = () => {
        setShowAddModal(false)
        setAddModalTab("manual")
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar currentView={currentView} notifications={notifications} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Manage and monitor your promoter referral activities" />

                <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
                    <AnimatePresence mode="wait">
                        {currentView === "promoters" ? (
                            <motion.div
                                key="promoters"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PromotersList
                                    promoters={promotersData}
                                    onPromoterClick={handlePromoterClick}
                                    onAddPromoter={handleAddPromoter}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="customerDetail"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CustomerDetail customer={customerData} onBackClick={handleBackClick} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>

            <AnimatePresence>
                {showAddModal && (
                    <AddPromoterModal onClose={handleCloseModal} activeTab={addModalTab} setActiveTab={setAddModalTab} />
                )}
            </AnimatePresence>
        </div>
    )
}

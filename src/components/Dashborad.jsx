"use client"

import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import Header from "./header"
import StatCard from "./dashboard-components/StatCard"
import CircleChart from "./dashboard-components/CircleChart"
import LineChart from "./dashboard-components/LineChart"
import DonutChart from "./dashboard-components/DonutChart"
import ChannelCard from "./dashboard-components/ChannelCard"
import ActivityTable from "./dashboard-components/ActivityTable"
import LeaderboardTable from "./dashboard-components/LeaderboardTable"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const naviagate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)
    const User = JSON.parse(localStorage.getItem("User"))

    useEffect(() => {
        if (!User) {
            naviagate("/login")
        }

        // Simulate data loading
        const timer = setTimeout(() => {
            setDashboardData(mockData)
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        )
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header title={"Dashboard"} />

                <main className="flex-1 overflow-y-auto p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <StatCard
                                icon="users"
                                title="Total Promoters"
                                value={dashboardData.stats.totalPromoters.value}
                                change={dashboardData.stats.totalPromoters.change}
                                isPositive={dashboardData.stats.totalPromoters.isPositive}
                            />
                            <StatCard
                                icon="percent"
                                title="Conversion rate"
                                value={dashboardData.stats.conversionRate.value}
                                change={dashboardData.stats.conversionRate.change}
                                isPositive={dashboardData.stats.conversionRate.isPositive}
                            />
                            <StatCard
                                icon="dollar"
                                title="Revenue Generated"
                                value={dashboardData.stats.revenueGenerated.value}
                                change={dashboardData.stats.revenueGenerated.change}
                                isPositive={dashboardData.stats.revenueGenerated.isPositive}
                            />
                            <StatCard
                                icon="campaign"
                                title="Active Campaigns"
                                value={dashboardData.stats.activeCampaigns.value}
                                change={null}
                                isPositive={true}
                            />
                        </div>

                        {/* Circle Charts Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <CircleChart
                                title="Repeat Referral Rate"
                                percentage={dashboardData.circleCharts.repeatReferral}
                                color="emerald"
                            />
                            <CircleChart
                                title="Referral Engagement Rate"
                                percentage={dashboardData.circleCharts.referralEngagement}
                                color="orange"
                            />
                            <CircleChart title="Churn Rate of Leads" percentage={dashboardData.circleCharts.churnRate} color="blue" />
                            <CircleChart
                                title="Upsell Rate of Leads"
                                percentage={dashboardData.circleCharts.upsellRate}
                                color="purple"
                            />
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="rounded-lg   bg-white p-6 shadow">
                                <div className="mb-4 flex  items-center justify-between">
                                    <h3 className="text-lg font-medium">Promoter Performance Over Time</h3>
                                    <select className="rounded-md border border-gray-300 px-3 py-1 text-sm">
                                        <option>Last 6 months</option>
                                        <option>Last 3 months</option>
                                        <option>Last month</option>
                                    </select>
                                </div>
                                <LineChart data={dashboardData.lineChartData} />
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow">
                                <h3 className="mb-4 text-lg font-medium">Conversion Success Rate</h3>
                                <div className="flex items-center justify-center">
                                    <DonutChart data={dashboardData.donutChartData} />
                                </div>
                                <div className="rounded-lg bg-white  p-6 pt-0 shadow">
                                    <h3 className="mb-4 text-lg font-medium">Top Performing Channel</h3>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {dashboardData.topChannels.map((channel, index) => (
                                            <ChannelCard key={index} name={channel.name} percentage={channel.percentage} color={channel.color} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Performing Channels */}


                        {/* Recent Activities */}
                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="mb-4 text-lg font-medium">Recent Activities</h3>
                            <ActivityTable activities={dashboardData.recentActivities} />
                        </div>

                        {/* Leaderboard */}
                        <div className="rounded-lg bg-white p-6 shadow">
                            <h3 className="mb-4 text-lg font-medium">Leaderboard Table View</h3>
                            <LeaderboardTable promoters={dashboardData.leaderboard} />
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    )
}

// Mock data for the dashboard
const mockData = {
    user: {
        name: "Kadin Stanton",
        email: "kadin.stanton@gmail.com",
        avatar: "/placeholder-user.jpg",
    },
    stats: {
        totalPromoters: {
            value: "1,234",
            change: "+23.4%",
            isPositive: true,
        },
        conversionRate: {
            value: "23.5%",
            change: "-2.3%",
            isPositive: false,
        },
        revenueGenerated: {
            value: "$12,345",
            change: "+8.7%",
            isPositive: true,
        },
        activeCampaigns: {
            value: "3",
            change: null,
            isPositive: true,
        },
    },
    circleCharts: {
        repeatReferral: 42,
        referralEngagement: 67,
        churnRate: 28,
        upsellRate: 19,
    },
    lineChartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        data: [30, 28, 45, 40, 50, 48],
        highlight: { month: "Feb", value: 28, change: "+30%" },
    },
    donutChartData: [
        { name: "Referrals sent", value: 67, color: "blue-400" },
        { name: "Converted", value: 42, color: "blue-200" },
    ],
    topChannels: [
        { name: "Facebook", percentage: 78, color: "bg-red-50 text-red-500" },
        { name: "Twitter", percentage: 45, color: "bg-blue-50 text-blue-500" },
        { name: "LinkedIn", percentage: 23, color: "bg-cyan-50 text-cyan-500" },
    ],
    recentActivities: [
        { activity: "Julian earned $10", date: "28-4-2024", time: "10:30 AM" },
        { activity: "John Doe signed up from your referral link", date: "29-4-2024", time: "9:45 AM" },
        { activity: "You reached 50 referrals milestone!", date: "30-4-2024", time: "8:20 AM" },
        { activity: "You updated your referral campaign", date: "31-4-2024", time: "7:00 AM" },
    ],
    leaderboard: [
        { rank: 1, name: "Emery Dokkis", conversions: 150, referrals: 80, successRate: "60%", revenue: "$1,200" },
        { rank: 2, name: "Kadin Liphutz", conversions: 132, referrals: 90, successRate: "65%", revenue: "$980" },
        { rank: 3, name: "Randy Culhane", conversions: 110, referrals: 60, successRate: "60%", revenue: "$880" },
        { rank: 4, name: "Jaxson Vaccaro", conversions: 100, referrals: 85, successRate: "75%", revenue: "$500" },
        { rank: 5, name: "Jocelyn Levin", conversions: 50, referrals: 30, successRate: "63%", revenue: "$600" },
        { rank: 6, name: "Maren Septimus", conversions: 80, referrals: 35, successRate: "25%", revenue: "$200" },
        { rank: 7, name: "Haylie Saris", conversions: 120, referrals: 55, successRate: "45%", revenue: "$150" },
        { rank: 8, name: "Randy Herwitz", conversions: 110, referrals: 90, successRate: "65%", revenue: "$380" },
    ],
}

"use client"

import { useState } from "react"
import {
  BrainCircuit,
  LayoutDashboard,
  Megaphone,
  Users,
  UserPlus,
  CreditCard,
  Settings,
  HelpCircle,
} from "lucide-react"

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("payouts")

  const menuItems = [
    { id: "ai-agent", icon: <BrainCircuit className="w-5 h-5" />, label: "AI Agent" },
    { id: "dashboard", icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
    { id: "campaign", icon: <Megaphone className="w-5 h-5" />, label: "Campaign" },
    { id: "promoters", icon: <Users className="w-5 h-5" />, label: "Promoters" },
    { id: "leads", icon: <UserPlus className="w-5 h-5" />, label: "Leads" },
    { id: "payouts", icon: <CreditCard className="w-5 h-5" />, label: "Payouts" },
  ]

  const bottomItems = [
    { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
    { id: "help", icon: <HelpCircle className="w-5 h-5" />, label: "Help" },
  ]

  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-full">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-200 ${
            activeItem === item.id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveItem(item.id)}
        >
          <div className={`${activeItem === item.id ? "text-blue-600" : "text-gray-500"}`}>{item.icon}</div>
          <span className="font-medium">{item.label}</span>
        </div>
      ))}

      <div className="mt-auto">
        {bottomItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="text-gray-500">{item.icon}</div>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

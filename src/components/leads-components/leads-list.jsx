"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, Filter, Eye, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function LeadsList({ onViewProfile }) {
  const [leads, setLeads] = useState([])
  const [selectedLeads, setSelectedLeads] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLeads([
        {
          id: 1,
          name: "Emery Dokidis",
          email: "emerydoki@gmail.com",
          phone: "+979970174715",
          coupon: "SAVE10NOW",
          status: "Pending",
        },
        {
          id: 2,
          name: "Kadin Lipshutz",
          email: "kadinlipshutz@gmail.com",
          phone: "+971501948279",
          coupon: "WELCOME15",
          status: "Pending",
        },
        {
          id: 3,
          name: "Randy Culhane",
          email: "randyculhane@gmail.com",
          phone: "+971501598978",
          coupon: "EXCLUSIVE20",
          status: "Pending",
        },
        {
          id: 4,
          name: "Jaxson Vaccaro",
          email: "jaxonvaccaro@gmail.com",
          phone: "+971522503635",
          coupon: "GETDEAL25",
          status: "Completed",
        },
        {
          id: 5,
          name: "Jocelyn Levin",
          email: "jocelynlevin@gmail.com",
          phone: "+971554315300",
          coupon: "FIRSTORDER10",
          status: "Pending",
        },
        {
          id: 6,
          name: "Maren Septimus",
          email: "marenseptimus@gmail.com",
          phone: "+971525620832",
          coupon: "SPECIALSAVE15",
          status: "Completed",
        },
        {
          id: 7,
          name: "Haylie Saris",
          email: "hayluesaris@gmail.com",
          phone: "+971503328228",
          coupon: "LIMITED20",
          status: "Completed",
        },
        {
          id: 8,
          name: "Randy Herwitz",
          email: "randyherwitz@gmail.com",
          phone: "+971554231522",
          coupon: "TRYUS10",
          status: "Pending",
        },
      ])
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLeads(leads.map((lead) => lead.id))
    } else {
      setSelectedLeads([])
    }
  }

  const handleSelectLead = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((leadId) => leadId !== id))
    } else {
      setSelectedLeads([...selectedLeads, id])
    }
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow"
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Leads</h2>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">Change Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-y border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedLeads.length === leads.length && leads.length > 0}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Lead Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Email ID</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Contact No.</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Coupon Code</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                  <p className="mt-2">Loading leads...</p>
                </td>
              </tr>
            ) : filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                  No leads found
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => handleSelectLead(lead.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4 text-gray-600">{lead.name}</td>
                  <td className="px-4 py-4 text-gray-600">{lead.email}</td>
                  <td className="px-4 py-4 text-gray-600">{lead.phone}</td>
                  <td className="px-4 py-4 text-gray-600">{lead.coupon}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${lead.status === "Pending" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
                        }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2" >
                      <button title="View Profile"
                        onClick={() => onViewProfile(lead)}
                        className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button title="Send follow-up message" className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

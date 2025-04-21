"use client"
import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import AIAssistantPopup from "./AIAssistantPopup"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"


export default function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [tourStep, setTourStep] = useState(1)
  const [tourCompleted, setTourCompleted] = useState(false)
  const location = useLocation()
  const [pathname, setPathname] = useState(location.pathname || null)

  useEffect(() => {
    // Set the current pathname
    setPathname(location.pathname)
  }, [location.pathname])

  // Determine which assistant view to show based on the current path
  const getAssistantType = () => {
    if (pathname === "/") return "dashboard"
    if (pathname === "/login") return "login"
    if (pathname === "/campaign") return "campaign"
    if (pathname === "/promoters") return "customer"
    if (pathname === "/leads") return "leads"
    if (pathname === "/aiagent") return "ai-agent"
    if (pathname === "/payouts") return "payouts"
    return "dashboard"
  }

  console.log("Current Path locationms:", location);
  console.log("Current Path:", pathname);

  useEffect(() => {
    // Check if this is the first visit
    const completed = localStorage.getItem("PlatformSetup")
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    if (!hasVisited && !tourCompleted && completed && pathname === "/") {

      const timer = setTimeout(() => {
        setShowTour(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [tourCompleted, pathname])

  const handleTourNext = () => {
    if (tourStep < 5) {
      setTourStep(tourStep + 1)
    } else {
      completeTour()
    }
  }

  const handleTourSkip = () => {
    completeTour()
  }

  const completeTour = () => {
    setShowTour(false)
    setTourCompleted(true)
    localStorage.setItem("hasVisitedBefore", "true")
  }

  const toggleAssistant = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleAssistant}
        className="fixed bottom-6  right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 pulse "
      >
        {isOpen ? <X size={24} /> : <img className="w-14 h-14" src="/ai.png" alt="" />}
      </button>

      {/* AI Assistant Popup - Fixed positioning to prevent overlapping */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <AIAssistantPopup type={getAssistantType()} onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Tour overlay */}
      {showTour && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(2px)" }}
          className="fixed inset-0  z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button onClick={completeTour} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>

            <div className="flex items-center mb-4">
              <div className="max-w-12 w-fit h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                <img className="w-14 h-12" src="/ai.png" alt="" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI Agent</h3>
                {tourStep === 1 && <p className="text-gray-600">Welcome to your dashboard!</p>}
                {tourStep === 2 && (
                  <p className="text-gray-600">Get a quick overview of your platform's performance.</p>
                )}
                {tourStep === 3 && <p className="text-gray-600">Create and manage campaigns with ease.</p>}
                {tourStep === 4 && <p className="text-gray-600">Manage your customer database.</p>}
                {tourStep === 5 && (
                  <p className="text-gray-600">Here, you'll see a list of all the people who were referred.</p>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-md mb-4">
              {tourStep === 1 && (
                <p className="text-gray-700">
                  Hey there! I'm your AI agent. This is where I live — your go-to space to ask anything, generate
                  campaigns, or get help filling out forms. I'm always just a click away!
                </p>
              )}
              {tourStep === 2 && (
                <p className="text-gray-700">
                  Get a quick overview of your platform's performance. View recent activities, monitor key analytics and
                  stay updated on what's working—all in real-time.
                </p>
              )}
              {tourStep === 3 && (
                <p className="text-gray-700">
                  Create and manage campaigns with ease. Set rewards, define messages, and personalize journeys for both
                  referrers and referred users.
                </p>
              )}
              {tourStep === 4 && (
                <p className="text-gray-700">
                  Manage your customer database. View profiles, referral history, engagement levels, and import or sync
                  customer lists from external sources like CSV or Zapier.
                </p>
              )}
              {tourStep === 5 && (
                <p className="text-gray-700">
                  Here, you'll see a list of all the people who were referred by promoters and have filled out the lead
                  form. You can view the follow-up messages.
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <button onClick={handleTourSkip} className="px-4 py-2 text-gray-600 hover:text-gray-800">
                Skip
              </button>
              <button
                onClick={handleTourNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {tourStep === 5 ? "Platform Setup" : `Next (${tourStep}/5)`}
              </button>
            </div>
          </div>
        </div >
      )
      }
    </>
  )
}

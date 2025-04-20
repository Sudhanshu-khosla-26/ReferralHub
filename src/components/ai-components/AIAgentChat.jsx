import { useState, useRef, useEffect } from "react"
import Sidebar from "../sidebar"
import Header from "../header"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import QuickLinks from "./QuickLinks"
import { motion } from "framer-motion"

export default function AIAgentChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Welcome Back, Kadin! How can I help you today?",
      timestamp: new Date(),
    },
  ])

  const [userProfile, setUserProfile] = useState({
    name: "Kadin Stanton",
    email: "kadinstanton@gmail.com",
    avatar: "/avatar.png",
  })

  const [campaignDetails, setCampaignDetails] = useState({
    goal: "",
    reward: "",
    condition: "",
    duration: "",
  })

  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setIsTyping(true)

    // Simulate AI response based on conversation flow
    setTimeout(() => {
      let aiResponse = ""

      // Simple conversation flow logic based on previous messages
      if (messages.length === 1) {
        aiResponse =
          "I'll help you create a high-converting referral campaign step by step. Let's start by defining your main objective. What's the primary goal of this campaign?"
      } else if (messages.length === 3) {
        aiResponse =
          "That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?"
      } else if (messages.length === 5) {
        aiResponse =
          "Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?"
      } else if (messages.length === 7) {
        aiResponse =
          "15% sounds like a strong incentive! Now, let's define when a referral is considered valid. When should the referrer receive their reward?"

        // Update campaign details
        setCampaignDetails((prev) => ({
          ...prev,
          reward: "15% discount on the next purchase",
        }))
      } else if (messages.length === 9) {
        aiResponse =
          "That's a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?"

        // Update campaign details
        setCampaignDetails((prev) => ({
          ...prev,
          condition: "Reward is given when the referred person makes a purchase",
        }))
      } else if (messages.length === 11) {
        aiResponse =
          "Got it! Here's a quick summary of your campaign:\n\n• Goal: Increase sales\n• Reward: 15% discount on the next purchase\n• Condition: Reward is given when the referred person makes a purchase\n• Duration: 3 months"

        // Update campaign details
        setCampaignDetails((prev) => ({
          ...prev,
          goal: "Increase sales",
          duration: "3 months",
        }))
      } else {
        aiResponse = "Is there anything else you'd like to know about your referral campaign?"
      }

      const newAiMessage = {
        id: messages.length + 2,
        sender: "ai",
        text: aiResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newAiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        sender: "ai",
        text: "Welcome Back, Kadin! How can I help you today?",
        timestamp: new Date(),
      },
    ])
    setCampaignDetails({
      goal: "",
      reward: "",
      condition: "",
      duration: "",
    })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col"
      >
        <Header title={"AI Agent"} />

        <div className="flex-1 overflow-y-auto p-4">
          <ChatMessages messages={messages} userProfile={userProfile} isTyping={isTyping} />
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-200">
          <QuickLinks />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </motion.div>
    </div>
  )
}

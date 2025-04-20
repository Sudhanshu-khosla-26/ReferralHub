"use client"
import { useState, useRef, useEffect } from "react"
import { X, Send } from "lucide-react"

// Update the component to initialize with empty chat history and show suggestions first
export default function AIAssistantPopup({ type = "dashboard", onClose }) {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const chatEndRef = useRef(null)

  // Get the appropriate title and suggestions based on the type
  const getAssistantInfo = () => {
    switch (type) {
      case "dashboard":
        return {
          title: "Dashboard Support",
          suggestions: [
            "Would you like to see today's insights for boosting referrals?",
            "Check out today's AI Insights",
            "Optimize your referral strategy",
            "View performance metrics",
            "Schedule a strategy call",
          ],
        }
      case "campaign":
        return {
          title: "Campaign Support",
          suggestions: [
            "I see you're managing campaigns. Need help optimizing your reward strategy?",
            "Create a new campaign",
            "Optimize reward strategy",
            "View campaign analytics",
            "Edit campaign settings",
          ],
        }
      case "customer":
        return {
          title: "Customer Support",
          suggestions: [
            "Looking at customer data? I can help you identify growth opportunities.",
            "Invite a customer to join",
            "Analyze customer behavior",
            "View referral analytics",
            "Export customer data",
          ],
        }
      case "leads":
        return {
          title: "Leads Support",
          suggestions: [
            "Need help managing your leads?",
            "Filter leads by status",
            "Send follow-up messages",
            "Export leads data",
            "Analyze conversion rates",
          ],
        }
      case "ai-agent":
        return {
          title: "AI Agent",
          suggestions: [],
        }
      case "login":
        return {
          title: "Login Support",
          suggestions: [
            "Your gateway to access awaits! 🔑 Choose your key to enter.",
            "SSO Login (Continue with Google/Microsoft/etc.)",
            "Magic Link (Send me a one-time login link)",
            "Email & Password (I'll enter my details manually.)",
          ],
        }
      default:
        return {
          title: "Support",
          suggestions: ["How can I help you today?", "View analytics", "Create a new campaign", "Manage referrals"],
        }
    }
  }

  const assistantInfo = getAssistantInfo()

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message to chat
    setChatHistory([...chatHistory, { sender: "user", text: message }])

    // Clear input
    setMessage("")

    // Simulate AI typing
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const response = `I'm processing your request: "${message}". How else can I assist you?`
      setChatHistory((prev) => [...prev, { sender: "ai", text: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion) => {
    // Add suggestion to chat as user message
    setChatHistory([...chatHistory, { sender: "user", text: suggestion }])

    // Simulate AI typing
    setIsTyping(true)

    // Generate specific responses based on the suggestion
    let response = ""

    // Dashboard responses
    if (suggestion === "Would you like to see today's insights for boosting referrals?") {
      response =
        "Based on today's data, I recommend focusing on Facebook which has a 78% conversion rate. Your referrals are up 15% from last week. Would you like me to prepare a detailed report?"
    } else if (suggestion === "Check out today's AI Insights") {
      response =
        "Today's insights show that customers who receive a follow-up within 48 hours are 3x more likely to convert. I've identified 12 leads that need follow-up. Would you like to see the list?"
    } else if (suggestion === "Optimize your referral strategy") {
      response =
        "Based on your current performance, increasing your reward by 10% could boost conversions by approximately 25%. Would you like me to simulate different reward scenarios?"
    } else if (suggestion === "View performance metrics") {
      response =
        "Your current conversion rate is 42%, which is 7% above industry average. Revenue generated is $12,345, up 6.7% from last month. Would you like to see a breakdown by channel?"
    } else if (suggestion === "Schedule a strategy call") {
      response =
        "I've checked your calendar and found a few available slots. How about tomorrow at 10:00 AM or Friday at 2:00 PM for a 30-minute strategy call?"
    }

    // Campaign responses
    else if (suggestion === "I see you're managing campaigns. Need help optimizing your reward strategy?") {
      response =
        "Looking at your Summer Reward Special campaign, I notice the conversion rate is 40%. Increasing the reward by 10% during peak season could boost this to approximately 55%. Would you like me to create a draft of the updated campaign?"
    } else if (suggestion === "Create a new campaign") {
      response =
        "Let's create a high-converting campaign. What's your primary goal? Increasing sales, boosting brand awareness, or re-engaging existing customers?"
    } else if (suggestion === "Optimize reward strategy") {
      response =
        "Based on your historical data, tiered rewards perform best for your audience. For example, $10 for the first referral, $15 for the second, and $25 for the third and beyond. Would you like to implement this strategy?"
    } else if (suggestion === "View campaign analytics") {
      response =
        "Your Summer Reward Special campaign has a 40% conversion rate and 320% ROI. The campaign has generated 94 new customers so far. Would you like to see a breakdown by referral source?"
    } else if (suggestion === "Edit campaign settings") {
      response =
        "What aspect of the campaign would you like to edit? The reward amount, duration, eligibility criteria, or messaging?"
    }

    // Customer support responses
    else if (suggestion === "Looking at customer data? I can help you identify growth opportunities.") {
      response =
        "I've analyzed your customer data and found that customers from Facebook have a 78% conversion rate, significantly higher than other channels. Additionally, 64% of your customers make repeat purchases. Would you like recommendations to increase this further?"
    } else if (suggestion === "Invite a customer to join") {
      response =
        "Would you like to send a personalized invitation or use one of our templates? Personalized invitations have a 35% higher acceptance rate."
    } else if (suggestion === "Analyze customer behavior") {
      response =
        "Your top customers typically make purchases every 45 days and refer an average of 3.2 new customers. The most engaged segment is in the 25-34 age range. Would you like a detailed behavioral analysis report?"
    } else if (suggestion === "View referral analytics") {
      response =
        "Your referral program has generated $23,900 in revenue this quarter, with an average conversion rate of 64%. The top referrer is Julian Smith with 15 successful referrals. Would you like to see more detailed metrics?"
    } else if (suggestion === "Export customer data") {
      response =
        "I can prepare an export of your customer data. Would you like it in CSV, Excel, or JSON format? I can also filter the data before exporting if needed."
    }

    // Leads responses
    else if (suggestion === "Need help managing your leads?") {
      response =
        "You currently have 5 pending leads that haven't been contacted in over 48 hours. Would you like me to draft follow-up messages for these leads?"
    } else if (suggestion === "Filter leads by status") {
      response =
        "You have 5 leads with 'Pending' status and 3 leads with 'Completed' status. Which would you like to view?"
    } else if (suggestion === "Send follow-up messages") {
      response =
        "I can help you send follow-up messages to your pending leads. Would you like to use a template or create a custom message?"
    } else if (suggestion === "Export leads data") {
      response = "I can prepare an export of your leads data. Would you like it in CSV, Excel, or JSON format?"
    } else if (suggestion === "Analyze conversion rates") {
      response =
        "Your overall lead conversion rate is 42%. Leads from Facebook convert at 78%, Twitter at 45%, and LinkedIn at 23%. Would you like recommendations to improve these rates?"
    }

    // Login responses
    else if (suggestion === "Your gateway to access awaits! 🔑 Choose your key to enter.") {
      response = "I can help you access your account. Please select one of the login methods below."
    } else if (suggestion === "SSO Login (Continue with Google/Microsoft/etc.)") {
      response =
        "I'll redirect you to the SSO provider. You'll be able to log in using your existing account credentials."
    } else if (suggestion === "Magic Link (Send me a one-time login link)") {
      response =
        "Please enter your email address, and I'll send you a secure one-time login link that will be valid for 10 minutes."
    } else if (suggestion === "Email & Password (I'll enter my details manually.)") {
      response = "Please enter your email address and password to access your account."
    }
    // Default response if no specific match
    else {
      response = `I'm working on your request about "${suggestion}". Is there anything specific you'd like to know?`
    }

    // Add AI response after a delay
    setTimeout(() => {
      setChatHistory((prev) => [...prev, { sender: "ai", text: response }])
      setIsTyping(false)
    }, 1500)
  }

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatHistory, isTyping])

  // Update the login type UI to match the design in the images
  if (type === "login") {
    return (
      <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40 scale-in">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-sm text-gray-500">{assistantInfo.title}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          {chatHistory.length > 0 ? (
            <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex items-start ${chat.sender === "user" ? "justify-end" : ""}`}>
                  {chat.sender === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${chat.sender === "user" ? "bg-blue-600 text-white ml-2" : "bg-blue-50 text-gray-700"
                      }`}
                  >
                    <p>{chat.text}</p>
                  </div>
                  {chat.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 ml-2 mt-1">
                      <span className="text-sm font-medium">KS</span>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{assistantInfo.suggestions[0]}</p>
              </div>

              <div className="space-y-2">
                {assistantInfo.suggestions.slice(1).map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-gray-700 rounded-md text-center transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 border-0 focus:ring-0 outline-none text-gray-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="ml-2 text-blue-600 hover:text-blue-800">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Update the AI Agent type UI to match the design in the images
  // For AI Agent type, we'll show a chat interface
  if (type === "ai-agent") {
    return (
      <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40 scale-in flex flex-col h-[600px]">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">AI Agent</h3>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-700">Welcome Back, Kadin! How can I help you today?</p>
              </div>
            </div>

            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex items-start ${chat.sender === "user" ? "justify-end" : ""}`}>
                {chat.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${chat.sender === "user" ? "bg-blue-600 text-white ml-2" : "bg-blue-50 text-gray-700"
                    }`}
                >
                  <p>{chat.text}</p>
                </div>
                {chat.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 ml-2 mt-1">
                    <span className="text-sm font-medium">KS</span>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 border-0 focus:ring-0 outline-none text-gray-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="ml-2 text-blue-600 hover:text-blue-800">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default assistant popup
  return (
    <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40 scale-in">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
            <img src="/ai.png" alt="" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm text-gray-500">{assistantInfo.title}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <div className="p-4">
        {chatHistory.length > 0 ? (
          <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex items-start ${chat.sender === "user" ? "justify-end" : ""}`}>
                {chat.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${chat.sender === "user" ? "bg-blue-600 text-white ml-2" : "bg-blue-50 text-gray-700"
                    }`}
                >
                  <p>{chat.text}</p>
                </div>
                {chat.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 ml-2 mt-1">
                    <span className="text-sm font-medium">KS</span>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            {assistantInfo.suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full py-1 px-4 mb-3 bg-blue-50 hover:bg-blue-100 text-gray-700 rounded-md text-center transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 border-0 focus:ring-0 outline-none text-gray-700"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="ml-2 text-blue-600 hover:text-blue-800">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

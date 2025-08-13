"use client"

import { useState } from "react"
import { Send, Bot, User } from "lucide-react"

const initialMessages = [
  {
    id: 1,
    type: "bot",
    message:
      "Hi Alex! I'm your financial AI assistant. I can help you with budgeting, savings goals, and spending analysis. What would you like to know?",
    timestamp: "10:30 AM",
  },
]

const AgentChatPage = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [inputText, setInputText] = useState("")

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      message: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setInputText("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        message:
          "Thanks for your question! Based on your spending patterns, I can see that you're doing well with your savings. Would you like me to analyze any specific category?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">AI Financial Coach</h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === "bot" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              {message.type === "bot" ? (
                <Bot size={16} className="text-blue-600" />
              ) : (
                <User size={16} className="text-gray-600" />
              )}
            </div>
            <div className={`max-w-[80%] ${message.type === "user" ? "text-right" : ""}`}>
              <div
                className={`p-3 rounded-2xl ${
                  message.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-blue-500 text-white"
                }`}
              >
                <p className="text-sm">{message.message}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me about your finances..."
            className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgentChatPage

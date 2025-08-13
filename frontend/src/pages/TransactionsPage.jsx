"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const transactions = [
    {
      id: 1,
      description: "Starbucks Coffee",
      amount: -4.95,
      date: "2024-01-15",
      category: "Food & Dining",
      account: "Chase Checking",
      isAIFlagged: false,
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 4200.0,
      date: "2024-01-15",
      category: "Income",
      account: "Chase Checking",
      isAIFlagged: false,
    },
    {
      id: 3,
      description: "Amazon Purchase",
      amount: -89.99,
      date: "2024-01-14",
      category: "Shopping",
      account: "Chase Credit Card",
      isAIFlagged: true,
    },
    {
      id: 4,
      description: "Uber Ride",
      amount: -12.5,
      date: "2024-01-14",
      category: "Transportation",
      account: "Chase Checking",
      isAIFlagged: false,
    },
    {
      id: 5,
      description: "Netflix Subscription",
      amount: -15.99,
      date: "2024-01-13",
      category: "Entertainment",
      account: "Chase Checking",
      isAIFlagged: false,
    },
    {
      id: 6,
      description: "Unusual ATM Withdrawal",
      amount: -200.0,
      date: "2024-01-13",
      category: "Cash",
      account: "Chase Checking",
      isAIFlagged: true,
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "income") return matchesSearch && transaction.amount > 0
    if (selectedFilter === "expenses") return matchesSearch && transaction.amount < 0
    if (selectedFilter === "flagged") return matchesSearch && transaction.isAIFlagged

    return matchesSearch
  })

  const formatAmount = (amount) => {
    const formatted = Math.abs(amount).toFixed(2)
    return amount >= 0 ? `+$${formatted}` : `-$${formatted}`
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 rounded-b-2xl mb-6">
        <h1 className="text-xl font-bold mb-2">Transactions</h1>
        <p className="text-white/80 text-sm">Track all your financial activity</p>
      </div>

      <div className="px-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[
            { key: "all", label: "All" },
            { key: "income", label: "Income" },
            { key: "expenses", label: "Expenses" },
            { key: "flagged", label: "AI Flagged" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedFilter === filter.key ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Date Range Selector */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Last 30 days</span>
          </div>
          <button className="text-primary text-sm font-medium">Change</button>
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`bg-white border rounded-lg p-4 ${
                transaction.isAIFlagged ? "border-red-200 bg-red-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                    {transaction.isAIFlagged && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">AI Flagged</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{transaction.category}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {transaction.account} • {formatDate(transaction.date)}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.amount >= 0 ? "text-green-600" : "text-gray-900"}`}>
                    {formatAmount(transaction.amount)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No transactions found</p>
          </div>
        )}

        {/* Load More Button */}
        <button className="w-full bg-gray-100 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Load More Transactions
        </button>
      </div>
    </div>
  )
}

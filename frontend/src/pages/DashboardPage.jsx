"use client"

import { Bell, Plus, TrendingUp, DollarSign, CreditCard } from "lucide-react"
import SummaryCard from "../components/SummaryCard"
import SpendingChart from "../components/SpendingChart"
import ExpenseChart from "../components/ExpenseChart"

export default function DashboardPage({ onNavigateToSettings }) {
  const summaryData = [
    { title: "Total Balance", amount: "$12,450.00", change: "+2.5%", positive: true, icon: DollarSign },
    { title: "Monthly Income", amount: "$4,200.00", change: "+5.2%", positive: true, icon: TrendingUp },
    { title: "Monthly Expenses", amount: "$2,850.00", change: "-1.8%", positive: true, icon: CreditCard },
  ]

  const quickActions = [
    { title: "Add Transaction", icon: Plus, color: "bg-primary" },
    { title: "View Reports", icon: TrendingUp, color: "bg-secondary text-gray-800" },
    { title: "Connect Account", icon: CreditCard, color: "bg-accent" },
  ]

  const aiInsights = [
    "You've saved 15% more this month compared to last month",
    "Your coffee spending is 23% higher than usual",
    "Consider setting up an emergency fund goal",
  ]

  const todayRecommendations = [
    "Review your subscription services - you could save $45/month",
    "Your grocery budget is on track this week",
    "Consider investing your extra $200 from this month",
  ]

  return (
    <div className="animate-fade-in">
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4 bg-gradient-primary text-white rounded-b-2xl mb-6">
        <div>
          <h1 className="text-xl font-bold">Good morning, Alex!</h1>
          <p className="text-white/80 text-sm">Here's your financial overview</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-xs rounded-full h-4 w-4 flex items-center justify-center text-gray-800">
              3
            </span>
          </button>
          <button
            onClick={onNavigateToSettings}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <span className="text-sm font-medium">A</span>
          </button>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4">
          {summaryData.map((item, index) => (
            <SummaryCard key={index} {...item} />
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`${action.color} text-white p-4 rounded-xl flex flex-col items-center space-y-2 hover:opacity-90 transition-opacity`}
              >
                <action.icon className="h-6 w-6" />
                <span className="text-xs font-medium text-center">{action.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Learning Agent Section */}
        <div className="gradient-card rounded-xl p-4">
          <h2 className="text-lg font-semibold text-primary mb-3 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Your Financial Insights
          </h2>
          <div className="space-y-2">
            {aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Coaching Agent Section */}
        <div className="bg-white border border-primary/20 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-primary mb-3">Today's Recommendations</h2>
          <div className="space-y-3">
            {todayRecommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="space-y-4">
          <SpendingChart />
          <ExpenseChart />
        </div>
      </div>
    </div>
  )
}

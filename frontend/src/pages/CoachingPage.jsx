import { Target, Trophy, Clock, CheckCircle } from "lucide-react"

export default function CoachingPage() {
  const dailyTip = {
    title: "Smart Spending Tip",
    content:
      "Try the 24-hour rule: wait a day before making non-essential purchases over $50. This simple pause can reduce impulse buying by up to 40%.",
    category: "Spending",
  }

  const weeklySavingsChallenge = {
    title: "Week 3: No-Spend Challenge",
    description: "Avoid all non-essential purchases for 3 days",
    progress: 2,
    total: 3,
    reward: "$25 bonus to savings goal",
  }

  const goals = [
    {
      id: 1,
      title: "Emergency Fund",
      target: 5000,
      current: 2750,
      deadline: "Dec 2024",
      status: "on-track",
    },
    {
      id: 2,
      title: "Vacation Fund",
      target: 2000,
      current: 450,
      deadline: "Jun 2024",
      status: "behind",
    },
    {
      id: 3,
      title: "New Car Down Payment",
      target: 8000,
      current: 6200,
      deadline: "Mar 2024",
      status: "ahead",
    },
  ]

  const reminders = [
    {
      id: 1,
      title: "Review monthly budget",
      dueDate: "Tomorrow",
      priority: "high",
    },
    {
      id: 2,
      title: "Pay credit card bill",
      dueDate: "Jan 20",
      priority: "medium",
    },
    {
      id: 3,
      title: "Update investment portfolio",
      dueDate: "Jan 25",
      priority: "low",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "on-track":
        return "text-green-600 bg-green-100"
      case "behind":
        return "text-red-600 bg-red-100"
      case "ahead":
        return "text-blue-600 bg-blue-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "low":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 rounded-b-2xl mb-6">
        <h1 className="text-xl font-bold mb-2">Financial Coaching</h1>
        <p className="text-white/80 text-sm">Personalized guidance for your financial journey</p>
      </div>

      <div className="px-4 space-y-6">
        {/* Daily Tip */}
        <div className="gradient-card rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Target className="h-4 w-4 text-gray-800" />
            </div>
            <div>
              <h2 className="font-semibold text-primary">{dailyTip.title}</h2>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{dailyTip.category}</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{dailyTip.content}</p>
        </div>

        {/* Weekly Savings Challenge */}
        <div className="bg-white border border-primary/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-primary flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Weekly Challenge
            </h2>
            <span className="text-xs bg-secondary text-gray-800 px-2 py-1 rounded-full">Active</span>
          </div>
          <h3 className="font-medium text-gray-900 mb-2">{weeklySavingsChallenge.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{weeklySavingsChallenge.description}</p>

          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">
                {weeklySavingsChallenge.progress}/{weeklySavingsChallenge.total} days
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(weeklySavingsChallenge.progress / weeklySavingsChallenge.total) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-800">
              <strong>Reward:</strong> {weeklySavingsChallenge.reward}
            </p>
          </div>
        </div>

        {/* Goal Progress Tracker */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Goal Progress</h2>
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{goal.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(goal.status)}`}>
                    {goal.status.replace("-", " ")}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">${goal.current.toLocaleString()}</span>
                    <span className="text-gray-600">${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Target: {goal.deadline}</span>
                  <span className="font-medium text-primary">
                    {Math.round((goal.current / goal.target) * 100)}% complete
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Reminders</h2>
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <div key={reminder.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-900">{reminder.title}</h3>
                      <p className="text-sm text-gray-500">Due: {reminder.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(reminder.priority)}`}>
                      {reminder.priority}
                    </span>
                    <button className="text-primary hover:text-accent transition-colors">
                      <CheckCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"

const insights = [
  {
    id: 1,
    type: "warning",
    icon: AlertCircle,
    title: "High Food Spending",
    description: "You've spent 25% more on food this month. Consider meal planning.",
    action: "Set Food Budget",
  },
  {
    id: 2,
    type: "success",
    icon: CheckCircle,
    title: "Savings Goal on Track",
    description: "Great job! You're 87% towards your monthly savings goal.",
    action: "View Progress",
  },
  {
    id: 3,
    type: "info",
    icon: TrendingUp,
    title: "Investment Opportunity",
    description: "You have ₹15,000 sitting idle. Consider investing in mutual funds.",
    action: "Explore Options",
  },
]

const InsightsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">Financial Insights</h1>
        <p className="text-gray-600 mt-1">Personalized recommendations for you</p>
      </div>

      {/* AI Agent Status */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">AI Agent Active</span>
        </div>
        <p className="text-sm opacity-90">Analyzing your spending patterns and finding optimization opportunities...</p>
      </div>

      {/* Insights List */}
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon
          const colorClasses = {
            warning: "border-orange-200 bg-orange-50",
            success: "border-green-200 bg-green-50",
            info: "border-blue-200 bg-blue-50",
          }
          const iconColors = {
            warning: "text-orange-600",
            success: "text-green-600",
            info: "text-blue-600",
          }

          return (
            <div key={insight.id} className={`p-4 rounded-xl border ${colorClasses[insight.type]}`}>
              <div className="flex items-start gap-3">
                <Icon size={20} className={iconColors[insight.type]} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{insight.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">{insight.action} →</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Monthly Report */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">This Month's Performance</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">Savings</span>
            </div>
            <p className="text-lg font-bold text-gray-800">+12%</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-red-600 mb-1">
              <TrendingDown size={16} />
              <span className="text-sm font-medium">Expenses</span>
            </div>
            <p className="text-lg font-bold text-gray-800">+8%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightsPage

import SummaryCard from "../components/SummaryCard"
import SpendingChart from "../components/SpendingChart"
import ExpenseChart from "../components/ExpenseChart"

const HomePage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Alex!</h1>
        <p className="text-gray-600 mt-1">Here's your financial overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4">
        <SummaryCard title="Total Balance" value="₹45,230" color="blue" />
        <div className="grid grid-cols-2 gap-4">
          <SummaryCard title="Monthly Spend" value="₹12,450" color="red" />
          <SummaryCard title="Savings Goal" value="₹8,770" color="green" />
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-4">
        <SpendingChart />
        <ExpenseChart />
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl text-white">
        <h3 className="font-semibold mb-2">Quick Tip</h3>
        <p className="text-sm opacity-90">
          You're spending 15% more on food this month. Consider meal planning to save ₹2,000!
        </p>
      </div>
    </div>
  )
}

export default HomePage

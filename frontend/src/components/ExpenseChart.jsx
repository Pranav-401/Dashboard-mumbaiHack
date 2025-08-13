import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Food", value: 35, color: "#3b82f6" },
  { name: "Transport", value: 25, color: "#ef4444" },
  { name: "Entertainment", value: 20, color: "#10b981" },
  { name: "Shopping", value: 15, color: "#f59e0b" },
  { name: "Others", value: 5, color: "#8b5cf6" },
]

const ExpenseChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend verticalAlign="bottom" height={36} formatter={(value) => <span className="text-sm">{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpenseChart

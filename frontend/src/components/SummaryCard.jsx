const SummaryCard = ({ title, value, color = "blue" }) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 text-white",
    red: "from-red-500 to-red-600 text-white",
    green: "from-green-500 to-green-600 text-white",
    purple: "from-purple-500 to-purple-600 text-white",
  }

  return (
    <div className={`bg-gradient-to-r ${colorClasses[color]} p-4 rounded-xl shadow-md`}>
      <h3 className="text-sm font-medium opacity-90">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  )
}

export default SummaryCard

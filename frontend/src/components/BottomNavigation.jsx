"use client"

const BottomNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{tab.name}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavigation

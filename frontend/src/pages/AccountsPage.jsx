import { Plus, CreditCard, Building2 } from "lucide-react"

const accounts = [
  { id: 1, name: "HDFC Savings", type: "Bank", balance: "₹25,430", icon: Building2 },
  { id: 2, name: "ICICI Credit Card", type: "Credit", balance: "₹-5,200", icon: CreditCard },
  { id: 3, name: "SBI Savings", type: "Bank", balance: "₹19,800", icon: Building2 },
]

const AccountsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">Your Accounts</h1>
        <p className="text-gray-600 mt-1">Manage your linked accounts</p>
      </div>

      {/* Add Account Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition-shadow">
        <Plus size={20} />
        Add New Account
      </button>

      {/* Accounts List */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">Linked Accounts</h2>
        {accounts.map((account) => {
          const Icon = account.icon
          return (
            <div
              key={account.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{account.name}</h3>
                  <p className="text-sm text-gray-600">{account.type} Account</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${account.balance.includes("-") ? "text-red-600" : "text-green-600"}`}>
                  {account.balance}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Account Summary */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
        <h3 className="font-semibold mb-2">Net Worth</h3>
        <p className="text-2xl font-bold">₹40,030</p>
        <p className="text-sm opacity-90 mt-1">+₹2,500 from last month</p>
      </div>
    </div>
  )
}

export default AccountsPage

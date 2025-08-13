import { Settings, Bell, LogOut, User, Mail, Phone, Shield } from "lucide-react"

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <User size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Alex Johnson</h1>
        <p className="text-gray-600 mt-1">Premium Member</p>
      </div>

      {/* User Info */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-800">alex.johnson@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-800">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Settings</h2>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-gray-500" />
              <span className="font-medium text-gray-800">Notification Preferences</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-gray-500" />
              <span className="font-medium text-gray-800">Privacy & Security</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Settings size={18} className="text-gray-500" />
              <span className="font-medium text-gray-800">App Settings</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>

      {/* Account Stats */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
        <h3 className="font-semibold mb-2">Account Statistics</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">127</p>
            <p className="text-sm opacity-90">Days Active</p>
          </div>
          <div>
            <p className="text-2xl font-bold">₹2.3L</p>
            <p className="text-sm opacity-90">Money Saved</p>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button className="w-full flex items-center justify-center gap-2 p-4 text-red-600 hover:bg-red-50 rounded-xl transition-colors border border-red-200">
        <LogOut size={18} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  )
}

export default ProfilePage

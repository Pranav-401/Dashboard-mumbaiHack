"use client"

import { ArrowLeft, User, Bell, Database, Download, LogOut, Shield, HelpCircle } from "lucide-react"

export default function SettingsPage({ onBack, onLogout }) {
  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile Settings", description: "Update your personal information" },
        { icon: Shield, label: "Security", description: "Password and authentication settings" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: Bell, label: "Notifications", description: "Manage your notification preferences" },
        { icon: Database, label: "Data Sources", description: "Connect accounts and data sources" },
      ],
    },
    {
      title: "App",
      items: [
        { icon: Download, label: "Install PWA", description: "Install app on your device" },
        { icon: HelpCircle, label: "Help & Support", description: "Get help and contact support" },
      ],
    },
  ]

  const handleInstallPWA = () => {
    // PWA installation logic would go here
    alert("PWA installation feature would be implemented here")
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 flex items-center space-x-3">
        <button onClick={onBack} className="p-1 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-xl font-bold">Settings</h1>
          <p className="text-white/80 text-sm">Manage your account and preferences</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Summary */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Alex Johnson</h2>
              <p className="text-sm text-gray-500">alex.johnson@email.com</p>
              <p className="text-xs text-gray-400 mt-1">Member since Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{group.title}</h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={item.label === "Install PWA" ? handleInstallPWA : undefined}
                  className={`w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition-colors ${
                    itemIndex !== group.items.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-gray-900">{item.label}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Data Sources Status */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Connected Sources</h3>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">SMS Integration</h4>
                  <p className="text-sm text-gray-500">Automatic transaction parsing via n8n</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Google Sheets</h4>
                  <p className="text-sm text-gray-500">Budget tracking spreadsheet</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Connected</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Bank Account</h4>
                  <p className="text-sm text-gray-500">Chase Checking ****1234</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Synced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full bg-red-50 border border-red-200 text-red-600 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center justify-center space-x-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}

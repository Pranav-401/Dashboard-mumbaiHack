"use client";

import { useState } from "react";
import { Home, Wallet, Receipt, BarChart3, Target } from "lucide-react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import TransactionsPage from "./pages/TransactionsPage";
import InsightsPage from "./pages/InsightsPage";
import CoachingPage from "./pages/CoachingPage";
import SettingsPage from "./pages/SettingsPage";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";

const tabs = [
  { id: "dashboard", name: "Dashboard", icon: Home, component: DashboardPage },
  { id: "accounts", name: "Accounts", icon: Wallet, component: AccountsPage },
  {
    id: "transactions",
    name: "Transactions",
    icon: Receipt,
    component: TransactionsPage,
  },
  {
    id: "insights",
    name: "Insights",
    icon: BarChart3,
    component: InsightsPage,
  },
  { id: "coaching", name: "Coaching", icon: Target, component: CoachingPage },
];

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state

  // Mock login function
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("login");
  };

  const navigateToSettings = () => {
    setCurrentPage("settings");
  };

  const navigateBack = () => {
    setCurrentPage("dashboard");
    setActiveTab("dashboard");
  };

  // Show login page if not authenticated
  if (!isAuthenticated || currentPage === "login") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-accent">
        <div className="max-w-md mx-auto min-h-screen">
          <LoginPage onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  // Show settings page
  if (currentPage === "settings") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
          <SettingsPage onBack={navigateBack} onLogout={handleLogout} />
        </div>
      </div>
    );
  }

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || DashboardPage;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
        <main className="pb-6">
          <ActiveComponent onNavigateToSettings={navigateToSettings} />
        </main>
        <BottomNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Truck,
  Package,
  FlaskConical,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react';
import { Button } from '../components/ui';
import { mockUser } from '../data/mockData';

// Sidebar Component
export const Sidebar = ({
  activeDashboard,
  setActiveDashboard,
  isCollapsed,
  toggleSidebar,
}) => {
  const menuItems = [
    { name: "Merchandising", icon: ShoppingCart, key: "merchandising" },
    { name: "Logistics", icon: Truck, key: "logistics" },
    { name: "Procurement", icon: Package, key: "procurement" },
    { name: "Sampling", icon: FlaskConical, key: "sampling" },
    { name: "Management", icon: Users, key: "management" },
    { name: "Analytics", icon: BarChart3, key: "analytics" },
    { name: "Settings", icon: Settings, key: "settings" },
  ];

  // Filter menu items based on user role (Example - customize as needed)
  const getVisibleMenuItems = (role) => {
    switch (role) {
      case "Merchandising":
        return menuItems.filter((item) =>
          ["merchandising", "analytics", "settings"].includes(item.key)
        );
      case "Logistics":
        return menuItems.filter((item) =>
          ["logistics", "analytics", "settings"].includes(item.key)
        );
      case "Procurement":
        return menuItems.filter((item) =>
          ["procurement", "analytics", "settings"].includes(item.key)
        );
      case "Sampling":
        return menuItems.filter((item) =>
          ["sampling", "analytics", "settings"].includes(item.key)
        );
      case "Senior Management":
      default:
        return menuItems; // Show all for management or default
    }
  };

  const visibleMenuItems = getVisibleMenuItems(mockUser.role);

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo/Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 h-16">
        {!isCollapsed && (
          <span className="text-xl font-semibold">ApparelMerch</span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-700"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-grow mt-4 overflow-y-auto">
        <ul>
          {visibleMenuItems.map((item) => (
            <li
              key={item.key}
              className={`mb-2 ${isCollapsed ? "px-2" : "px-4"}`}
            >
              <button
                onClick={() => setActiveDashboard(item.key)}
                title={isCollapsed ? item.name : ""} // Show tooltip when collapsed
                className={`flex items-center w-full py-3 rounded-md transition-colors duration-200 ${
                  activeDashboard === item.key
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } ${isCollapsed ? "justify-center px-0" : "px-4"}`}
              >
                <item.icon size={20} className={!isCollapsed ? "mr-3" : ""} />
                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer/User Info */}
      <div
        className={`p-4 border-t border-gray-700 ${
          isCollapsed ? "flex flex-col items-center space-y-2" : ""
        }`}
      >
        {!isCollapsed && (
          <div className="mb-2">
            <p className="text-sm font-medium truncate">{mockUser.name}</p>
            <p className="text-xs text-gray-400">{mockUser.role}</p>
          </div>
        )}
        <button
          title={isCollapsed ? "Logout" : ""}
          className={`flex items-center w-full py-2 rounded-md text-gray-300 hover:bg-red-600 hover:text-white ${
            isCollapsed ? "justify-center px-0" : "px-4"
          }`}
        >
          <LogOut size={20} className={!isCollapsed ? "mr-3" : ""} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

// Header Component
export const Header = ({ title }) => {
  return (
    <header className="bg-white shadow-sm p-4 h-16 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      {/* Placeholder for other header elements */}
      <div className="flex items-center space-x-4">
        <Button variant="secondary" icon={Search} size="sm">
          Search
        </Button>
        {/* Add Notifications, User Profile Dropdown here */}
      </div>
    </header>
  );
};

// Main Layout Component
const MainLayout = ({ children, activeDashboard, setActiveDashboard }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Function to toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Function to get the title for the header
  const getDashboardTitle = () => {
    switch (activeDashboard) {
      case "merchandising":
        return "Merchandising";
      case "logistics":
        return "Logistics";
      case "procurement":
        return "Procurement";
      case "sampling":
        return "Sampling";
      case "management":
        return "Management Overview";
      case "analytics":
        return "Analytics & Reports";
      case "settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar
        activeDashboard={activeDashboard}
        setActiveDashboard={setActiveDashboard}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={getDashboardTitle()} />

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
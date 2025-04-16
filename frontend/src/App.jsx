import React, { useState } from "react";
import ManagementDashboard from "./pages/ManagementDashboard";
import MainLayout from "./layouts/MainLayout";
import MerchandisingDashboard from "./pages/MerchandisingDashboard";
import LogisticsDashboard from "./pages/LogisticsDashboard";
import ProcurementDashboard from "./pages/ProcurementDashboard";
import SamplingDashboard from "./pages/SamplingDashboard";

// Main App Component
function App() {
  const [activeDashboard, setActiveDashboard] = useState("merchandising");

  // Render the appropriate dashboard based on active selection
  const renderDashboard = () => {
    switch (activeDashboard) {
      case "merchandising":
        return <MerchandisingDashboard />;
      case "logistics":
        return <LogisticsDashboard />;
      case "procurement":
        return <ProcurementDashboard />;
      case "sampling":
        return <SamplingDashboard />;
      case "management":
        return <ManagementDashboard />;
      case "analytics":
        return <div className="p-6">Analytics Dashboard (Placeholder)</div>;
      case "settings":
        return <div className="p-6">Settings Dashboard (Placeholder)</div>;
      default:
        return <MerchandisingDashboard />;
    }
  };

  return (
    <MainLayout
      activeDashboard={activeDashboard}
      setActiveDashboard={setActiveDashboard}
    >
      {renderDashboard()}
    </MainLayout>
  );
}

export default App;

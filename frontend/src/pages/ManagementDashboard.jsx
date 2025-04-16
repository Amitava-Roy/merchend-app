import React from 'react';
import { BarChart3, ShoppingCart, Truck, Settings } from 'lucide-react';
import { KpiCard } from '../components/ui';

const ManagementDashboard = () => (
  <div className="p-6 space-y-6">
    <h2 className="text-xl font-semibold mb-4">Senior Management Overview</h2>
    {/* High-level KPIs */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard
        title="Total Revenue"
        value="$1.2M"
        change="+5.2%"
        icon={BarChart3}
      />
      <KpiCard title="Open Orders" value="15" change="-2" icon={ShoppingCart} />
      <KpiCard
        title="Production Efficiency"
        value="85%"
        change="+1.5%"
        icon={Settings}
      />
      <KpiCard
        title="On-Time Delivery"
        value="92%"
        change="-0.8%"
        icon={Truck}
      />
    </div>
    
    {/* Placeholder for charts/summary widgets */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium text-gray-700 mb-2">Revenue by Product Category</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium text-gray-700 mb-2">Production Timeline</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Timeline Placeholder</p>
        </div>
      </div>
    </div>
  </div>
);

export default ManagementDashboard;
import React from 'react';
import { Search } from 'lucide-react';
import { SimpleTable, Button, KpiCard } from '../components/ui';
import { mockShipments } from '../data/mockData';

const LogisticsDashboard = () => (
  <div className="p-6 space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Shipment Tracking</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Button icon={Search} size="sm">
          Track
        </Button>
      </div>
    </div>
    {/* Shipment Table */}
    <SimpleTable
      headers={[
        "Shipment ID",
        "Order ID",
        "Destination",
        "Carrier",
        "Status",
        "Actions",
      ]}
      data={mockShipments}
      renderRow={(shipment) => (
        <tr key={shipment.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {shipment.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {shipment.orderId}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {shipment.destination}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {shipment.carrier}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                shipment.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : shipment.status === "In Transit"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {shipment.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
            <button className="text-indigo-600 hover:text-indigo-900">
              Details
            </button>
          </td>
        </tr>
      )}
    />
    <h2 className="text-xl font-semibold pt-4">Inventory Overview</h2>
    {/* Add Inventory placeholder cards/widgets */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <KpiCard title="Raw Materials Value" value="$150,230" />
      <KpiCard title="WIP Units" value="5,890" />
      <KpiCard title="Finished Goods Units" value="12,450" />
    </div>
  </div>
);

export default LogisticsDashboard;
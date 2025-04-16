import React from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { SimpleTable, Button } from '../components/ui';
import { mockOrders, mockProducts } from '../data/mockData';

const MerchandisingDashboard = () => (
  <div className="p-6 space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Order Management</h2>
      <Button icon={PlusCircle} onClick={() => alert("Add New Order clicked!")}>
        New Order
      </Button>
    </div>
    {/* Order Table */}
    <SimpleTable
      headers={[
        "Order ID",
        "Customer",
        "Deadline",
        "Status",
        "Value",
        "Actions",
      ]}
      data={mockOrders}
      renderRow={(order) => (
        <tr key={order.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {order.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {order.customer}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {order.deadline}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                order.status === "Shipped"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Processing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {order.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${order.value.toLocaleString()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
            <button className="text-indigo-600 hover:text-indigo-900">
              <Edit size={16} />
            </button>
            <button className="text-red-600 hover:text-red-900">
              <Trash2 size={16} />
            </button>
          </td>
        </tr>
      )}
    />

    <h2 className="text-xl font-semibold pt-4">Product Development Tracker</h2>
    {/* Product Development Table */}
    <SimpleTable
      headers={[
        "Product ID",
        "Name",
        "Current Stage",
        "Last Update",
        "Actions",
      ]}
      data={mockProducts}
      renderRow={(product) => (
        <tr key={product.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {product.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.stage}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.lastUpdate}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
            <button className="text-indigo-600 hover:text-indigo-900">
              <Edit size={16} />
            </button>
          </td>
        </tr>
      )}
    />
  </div>
);

export default MerchandisingDashboard;
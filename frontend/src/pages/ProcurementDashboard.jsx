import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { SimpleTable, Button } from '../components/ui';
import { fetchVendors } from '../api';

const ProcurementDashboard = () => {
  const [fetchedVendors, setFetchedVendors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const vendorsData = await fetchVendors();
        setFetchedVendors(vendorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Vendor Management</h2>
        <Button
          icon={PlusCircle}
          onClick={() => alert("Add New Vendor clicked!")}
        >
          New Vendor
        </Button>
      </div>
      {/* Vendor Table */}
      <SimpleTable
        headers={[
          "Vendor ID",
          "Name",
          "Material Focus",
          "Rating",
          "Location",
          "Actions",
        ]}
        data={fetchedVendors}
        renderRow={(vendor) => (
          <tr key={vendor.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {vendor.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {vendor.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {vendor.material}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">
              {vendor.rating} / 5
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {vendor.location}
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
      <h2 className="text-xl font-semibold pt-4">Purchase Orders</h2>
      {/* Add PO list/summary placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-gray-600">Purchase Order list placeholder...</p>
        <Button variant="secondary" size="sm" className="mt-2">
          View All POs
        </Button>
      </div>
    </div>
  );
};

export default ProcurementDashboard;
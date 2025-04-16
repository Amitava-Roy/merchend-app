import React, { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import { SimpleTable, Button } from '../components/ui';
import { fetchSamples } from '../api';

const SamplingDashboard = () => {
  const [fetchedSamples, setFetchedSamples] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const samplesData = await fetchSamples();
        setFetchedSamples(samplesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Sample Tracking</h2>
        <Button
          icon={PlusCircle}
          onClick={() => alert("Request New Sample clicked!")}
        >
          Request Sample
        </Button>
      </div>
      {/* Sample Table */}
      <SimpleTable
        headers={[
          "Sample ID",
          "Product ID",
          "Version",
          "Status",
          "Requested By",
          "Date",
          "Actions",
        ]}
        data={fetchedSamples}
        renderRow={(sample) => (
          <tr key={sample.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {sample.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sample.productId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sample.version}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  sample.status === "Approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {sample.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sample.requestedBy}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {sample.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
              <button className="text-indigo-600 hover:text-indigo-900">
                Review
              </button>
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default SamplingDashboard;
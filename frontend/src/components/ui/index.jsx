import React from 'react';
import {
  Edit,
  Trash2,
  Search,
  Filter,
  PlusCircle,
} from 'lucide-react';

// Simple Table Component
export const SimpleTable = ({ headers, data, renderRow }) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map(renderRow)}
      </tbody>
    </table>
  </div>
);

// Card Component for KPIs
export const KpiCard = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
    {Icon && <Icon className="h-8 w-8 text-indigo-500" />}
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      {change && (
        <p
          className={`text-xs ${
            change.startsWith("+") ? "text-green-600" : "text-red-600"
          }`}
        >
          {change} vs last period
        </p>
      )}
    </div>
  </div>
);

// Button Component
export const Button = ({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  size = "md",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variantStyles = {
    primary:
      "border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
    danger:
      "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} disabled:opacity-50`}
    >
      {Icon && <Icon className={`-ml-1 mr-2 h-5 w-5`} aria-hidden="true" />}
      {children}
    </button>
  );
};
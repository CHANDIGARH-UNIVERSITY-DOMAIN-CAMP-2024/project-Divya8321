import React from 'react';
import { formatIndianRupees } from '../utils/currency';

const categories = [
  { name: 'Housing', allocated: 200000, spent: 180000 },
  { name: 'Transportation', allocated: 50000, spent: 45000 },
  { name: 'Food', allocated: 80000, spent: 75000 },
  { name: 'Utilities', allocated: 30000, spent: 28000 },
  { name: 'Healthcare', allocated: 40000, spent: 20000 },
];

export default function BudgetOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Overview</h2>
      <div className="space-y-4">
        {categories.map((category) => {
          const percentage = (category.spent / category.allocated) * 100;
          const barColor = percentage > 90 ? 'bg-red-500' : 'bg-blue-500';
          
          return (
            <div key={category.name}>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{category.name}</span>
                <span>{formatIndianRupees(category.spent)} / {formatIndianRupees(category.allocated)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${barColor} rounded-full h-2`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
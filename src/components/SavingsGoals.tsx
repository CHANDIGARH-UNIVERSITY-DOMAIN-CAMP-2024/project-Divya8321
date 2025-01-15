import React from 'react';
import { formatIndianRupees } from '../utils/currency';

const goals = [
  { name: 'Emergency Fund', current: 500000, target: 1000000 },
  { name: 'Vacation', current: 200000, target: 300000 },
  { name: 'Education', current: 1500000, target: 5000000 },
];

export default function SavingsGoals() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Savings Goals</h2>
      <div className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          return (
            <div key={goal.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{goal.name}</span>
                <span className="text-gray-900 font-medium">
                  {formatIndianRupees(goal.current)} / {formatIndianRupees(goal.target)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 rounded-full h-2"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
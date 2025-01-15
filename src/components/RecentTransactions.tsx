import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatIndianRupees } from '../utils/currency';

const transactions = [
  { id: 1, description: 'Grocery Shopping', amount: -12000, date: '2024-03-15', type: 'expense' },
  { id: 2, description: 'Salary Deposit', amount: 300000, date: '2024-03-14', type: 'income' },
  { id: 3, description: 'Electric Bill', amount: -8500, date: '2024-03-13', type: 'expense' },
  { id: 4, description: 'Freelance Payment', amount: 50000, date: '2024-03-12', type: 'income' },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center">
              {transaction.type === 'income' ? (
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              ) : (
                <ArrowDownRight className="h-5 w-5 text-red-500" />
              )}
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${
              transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatIndianRupees(Math.abs(transaction.amount))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
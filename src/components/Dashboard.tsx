import React from 'react';
import { PiggyBank, CreditCard, TrendingUp, DollarSign } from 'lucide-react';
import BudgetOverview from './BudgetOverview';
import RecentTransactions from './RecentTransactions';
import SavingsGoals from './SavingsGoals';
import { formatIndianRupees } from '../utils/currency';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Family Finance Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">{formatIndianRupees(1275000)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center">
            <PiggyBank className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Savings</p>
              <p className="text-2xl font-bold text-gray-900">{formatIndianRupees(523000)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Monthly Expenses</p>
              <p className="text-2xl font-bold text-gray-900">{formatIndianRupees(218000)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Investment Returns</p>
              <p className="text-2xl font-bold text-gray-900">{formatIndianRupees(89000)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BudgetOverview />
        <div className="space-y-8">
          <RecentTransactions />
          <SavingsGoals />
        </div>
      </div>
    </div>
  );
}
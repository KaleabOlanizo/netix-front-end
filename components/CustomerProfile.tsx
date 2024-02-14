// CustomerProfile.tsx

import React, { useState, useEffect } from 'react';
import CustomerList from './CustomersList';
import CustomerDetails from './CustomerDetails';
import InteractiveGraph from './InteractiveGraph';


interface CustomerProfileProps {
  customers: Customer[];
  tabName: string
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ customers, tabName }) => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [filteredCustomer, setFilteredCustomer] = useState<Customer[]>([]);
  const [inactivityFilter, setInactivityFilter] = useState('daily'); // Daily, Weekly, 30 Days, 60 Days, 90 Days
  const [statusFilter, setStatusFilter] = useState('both'); // Active, Inactive
  const [churnFilter, setChurnFilter] = useState('high'); // High, Medium, Low
  
  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };
  
  const getFilteredCustomers = () => {
    
    return customers.filter(customer => {
      console.log(customer.churnProbablity);
      console.log(churnFilter);
      
      const meetsInactivityFilter = !inactivityFilter || inactivityFilter ==="both" || (
        inactivityFilter === "daily" && customer.status.daily == statusFilter.toLowerCase() ||
        inactivityFilter === "weekly" && customer.status.weekly == statusFilter.toLowerCase() ||
        inactivityFilter === "thirtyDays" && customer.status.thirtyDay == statusFilter.toLowerCase() ||
        inactivityFilter === "sixtyDays" && customer.status.sixtyDay == statusFilter.toLowerCase() ||
        inactivityFilter === "nintyDays" && customer.status.ninetyDay == statusFilter.toLowerCase() 
      )


      // const meetsStatusFilter = !statusFilter || customer.status.toLowerCase() === statusFilter.toLowerCase();
      const meetsChurnFilter = !churnFilter || (
          churnFilter === "high" && customer.churnProbablity > 75 ||
          churnFilter === "medium" && customer.churnProbablity > 50 ||
          churnFilter === "low" && customer.churnProbablity <= 50
      );
      return (
        meetsInactivityFilter 
        // && meetsStatusFilter 
        && meetsChurnFilter
      )
    });
  };
  
  useEffect(() => {
    setFilteredCustomer( getFilteredCustomers());
  }, [churnFilter, statusFilter, inactivityFilter])
  
  return (
    <div>
      <div>
        <div className="flex space-x-4 mb-4">
          {/* Inactivity Period Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Inactivity Period</label>
            <select
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              onChange={(e) => setInactivityFilter(e.target.value)}
            >
              <option value="">Select Inactivity Period</option>
              <option value="daily" selected>Daily</option>
              <option value="weekly">Weekly</option>
              <option value="thirtyDays">30 Days</option>
              <option value="sixtyDays">60 Days</option>
              <option value="nintyDays">90 Days</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="both">Both</option>
              <option value="active" selected>Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Churn Probability Filter */}
          { 
            tabName === "In Activity Prediction" &&
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Churn Probability</label>
              <select
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                onChange={(e) => setChurnFilter(e.target.value)}
              >
                <option value="">Select Churn Probability</option>
                <option value="high" selected>High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          }
        </div>
      </div>

      <div className="flex bg-gray-100 bg-opacity-10 h-screen">
      {/* Left side - Customer List */}
      <CustomerList
        customers={filteredCustomer}
        onCustomerClick={handleCustomerClick}
        selectedCustomer={selectedCustomer}
        tabName = {tabName}
        activityPeriod = {inactivityFilter}
      />

      {/* Right side - Customer Details */}
      <InteractiveGraph selectedCustomer={selectedCustomer}  />
      {/* <CustomerDetails selectedCustomer={selectedCustomer} /> */}
    </div>
    </div>
    
  );
};

export default CustomerProfile;

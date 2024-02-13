// CustomerProfile.tsx

import React, { useState } from 'react';
import CustomerList from './CustomersList';
import CustomerDetails from './CustomerDetails';
import InteractiveGraph from './InteractiveGraph';

interface Customer {
  id: number;
  name: string;
  msisdn: string;
  status: string;
  // Add more customer details as needed
}


interface CustomerProfileProps {
  customers: Customer[];
  tabName: string
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ customers, tabName }) => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="flex bg-gray-100 bg-opacity-10 h-screen">
      {/* Left side - Customer List */}
      <CustomerList
        customers={customers}
        onCustomerClick={handleCustomerClick}
        selectedCustomer={selectedCustomer}
        tabName = {tabName}
      />

      {/* Right side - Customer Details */}
      <InteractiveGraph selectedCustomer={selectedCustomer}  />
      {/* <CustomerDetails selectedCustomer={selectedCustomer} /> */}
    </div>
  );
};

export default CustomerProfile;

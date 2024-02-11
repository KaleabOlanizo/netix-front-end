import React from 'react';


interface CustomerListProps {
  customers: Customer[];
  onCustomerClick: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onCustomerClick, selectedCustomer }) => {
  return (
    <div className="w-1/3 p-4 bg-white bg-opacity-10 overflow-y-auto border-r border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Customer List</h2>
      <div>
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`cursor-pointer p-4 mb-4 ${
              selectedCustomer === customer ? 'bg-gray-200' : ''
            } transition duration-300 ease-in-out transform hover:scale-105`}
            onClick={() => onCustomerClick(customer)}
          >
            <div className="text-lg font-semibold">{customer.name}</div>
            <div className="text-gray-600">{customer.msisdn}</div>
            <div className="text-gray-500">{customer.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
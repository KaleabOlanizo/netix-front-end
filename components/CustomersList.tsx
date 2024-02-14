import React, { useState } from 'react';


interface CustomerListProps {
  customers: Customer[];
  onCustomerClick: (customer: Customer) => void;
  selectedCustomer: Customer | null;
  tabName: string;
  activityPeriod: string;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onCustomerClick, selectedCustomer, tabName, activityPeriod }) => {

  return (
    <div className="w-1/3 p-4 bg-white bg-opacity-10 overflow-y-auto border-r border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Customer List</h2>
      {customers.length !== 0 ?
      <div>
      {    
        customers.map((customer) => {
            const churnProbability = customer.churnProbablity;
            let color;
            let status = 
            activityPeriod === "daily" ? customer.status.daily :
            activityPeriod === "weekly" ? customer.status.weekly :
            activityPeriod === "thirtday" ? customer.status.thirtyDay :
            activityPeriod === "sixtyday" ? customer.status.sixtyDay :
            customer.status.ninetyDay;
            status = status[0].toUpperCase() + status.substring(1,status.length)

            if (churnProbability >= 75) {
              color = 'text-red-500'; // or any other red color class in Tailwind CSS
            } else if (churnProbability > 50) {
              color = 'text-yellow-500'; // or any other yellow color class in Tailwind CSS
            } else {
              color = 'text-green-500'; // or any other green color class in Tailwind CSS
            }

            return (
              <div
                key={customer.id}
                className={`cursor-pointer p-4 mb-4 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105 mb-4 border-b
                ${
                  selectedCustomer === customer ? 'bg-gray-300' : ''
                }`}
                onClick={() => onCustomerClick(customer)}
              >
                <div className="text-lg font-semibold">{customer.name}</div>
                <div className="text-gray-600">{customer.msisdn}</div>
                <div className={`${status === "Active" ? "text-green-500": "text-red-500"}`}>{status}</div>
                {tabName == "In Activity Prediction" ? <div className="className">Churn Probability : <span className={`${color}`}> {churnProbability}%</span></div> : ""}
              </div>
            );
          })
        }
      </div>
      : <span>No Customer with the selected filters.</span>
      }
    </div>
  );
};

export default CustomerList;

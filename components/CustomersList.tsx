import React from 'react';


interface CustomerListProps {
  customers: Customer[];
  onCustomerClick: (customer: Customer) => void;
  selectedCustomer: Customer | null;
  tabName: string
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onCustomerClick, selectedCustomer, tabName }) => {
  console.log(tabName);
  
  return (
    <div className="w-1/3 p-4 bg-white bg-opacity-10 overflow-y-auto border-r border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Customer List</h2>
      <div>
      {    
        customers.map((customer) => {
            const churnProbability = Math.random() * 100;
            let color;

            if (churnProbability >= 75) {
              color = 'text-red-500'; // or any other red color class in Tailwind CSS
            } else if (churnProbability >= 50) {
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
                <div className={`${customer.status === "Active" ? "text-green-500": "text-red-500"}`}>{customer.status}</div>
                {tabName == "In Activity Prediction" ? <div className="className">Churn Probability : <span className={`${color}`}> {churnProbability.toFixed(2)}%</span></div> : ""}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CustomerList;

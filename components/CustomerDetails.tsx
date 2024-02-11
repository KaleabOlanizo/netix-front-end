import React from 'react';

interface CustomerDetailsProps {
  selectedCustomer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ selectedCustomer }) => {
  return (
    <div className="w-2/3 p-4 bg-opacity-10">
      <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
      {selectedCustomer ? (
        <div className="flex flex-col items-center">
          <img
            src={`https://placekitten.com/150/150?random=${selectedCustomer.id}`}
            alt="Customer Avatar"
            className="mb-4 rounded-full"
          />
          <div className="text-lg font-semibold mb-2">{selectedCustomer.name}</div>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>Date of Birth: 01/01/1990</div>
            <div>Gender: Male</div>
            <div>Nationality: Ethiopian</div>
            <div>Region: Addis Ababa</div>
            <div>City: Addis Ababa</div>
            <div>Wereda: 03</div>
            <div>Zone: Central</div>
            <div>Total Recharge: $100</div>
            <div>Current Balance: $50</div>
            <div>Activation Type: Prepaid</div>
            <div>Age on the Network: 5 years</div>
          </div>
        </div>
      ) : (
        <div className="text-gray-600">Select a customer from the list to view details.</div>
      )}
    </div>
  );
};

export default CustomerDetails;

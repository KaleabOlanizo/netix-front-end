import React from 'react';
import Image from 'next/image';

const SelectCustomerMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-xl font-semibold mb-4">No Customer selected</p>
      <div className="w-40 h-40">
        <Image
          src="/no-customer.png" // replace with the path to your image
          alt="Customer Image"
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default SelectCustomerMessage;

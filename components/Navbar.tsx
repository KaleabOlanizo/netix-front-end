// Navbar.tsx

import React from 'react';

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  return (
    <nav className="ml-6 bg-opacity-10p-4 flex justify-between items-center">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-8 mr-2" />
      </div>

      {/* Right side - Search bar and button 
      
      <div className="flex items-center">
        
        <input
          type="text"
          placeholder="Search"
          className="border rounded-l px-2 py-1 focus:outline-none focus:border-gray-300"
          style={{ width: '600px' }} // Adjust the width as needed
        />
        <button className="bg-green-700 text-white px-4 py-1 rounded-r">
          Search
        </button>
      </div>
      
      */}
      
    </nav>
  );
};

export default Navbar;

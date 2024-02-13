// TabsComponent.tsx

import React, { useState } from 'react';

interface TabsProps {
  tabs: Tab[];
  activeTab:string;
  onTabClick: any
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {

  return (
    <div className="bg-gray-100 bg-opacity-10 rounded-md p-2">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <div className='relative mx-2'>
            <div
              key={tab.name}
              className={`cursor-pointer p-3 px-6 hover:bg-gray-100 rounded-t-md ${
                activeTab === tab.name ? 'bg-gray-500 text-white border-black-200'
                  : 'bg-gray-100 text-black border-black-200'
              }`}
              onClick={() => onTabClick(tab.name)}
            >
              {tab.name} 
            </div>
            {tab.notification !== 0 && (
              <div className="rounded-full bg-red-500 p-1 text-white shadow-md absolute top-0 right-0 w-6 h-6 flex items-center justify-center">
                {tab.notification}
              </div>
            )}
          </div>
          
        ))}
      </div>

      {/* Line at the bottom */}
      <div className="border-b border-gray-300" />
    </div>
  );

};

export default Tabs;

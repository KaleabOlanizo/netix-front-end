// TabsComponent.tsx

import React, { useState } from 'react';

interface TabsProps {
  tabs: string[];
  activeTab:string;
  onTabClick: any
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {

  return (
    <div className="bg-gray-100 bg-opacity-10 rounded-md p-2">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer p-2 mx-2 ${
              activeTab === tab
                ? 'bg-white text-black border-black-200'
                : 'bg-gray-100 bg-opacity-10 text-black'
            } rounded-t-md`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Line at the bottom */}
      <div className="border-b border-gray-300" />

      {/* Content based on active tab */}
      <div className="mt-2">
        {/* You can render content based on the activeTab state */}
        {activeTab === 'Tab 1' && <div>Content for Tab 1</div>}
        {activeTab === 'Tab 2' && <div>Content for Tab 2</div>}
        {activeTab === 'Tab 3' && <div>Content for Tab 3</div>}
        {activeTab === 'Tab 4' && <div>Content for Tab 4</div>}
      </div>
    </div>
  );

};

export default Tabs;

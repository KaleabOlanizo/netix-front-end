// TabContentComponent.tsx

import React, { useEffect, useState } from 'react';
import CustomerProfile from './CustomerProfile';

interface TabContentComponentProps {
  activeTab: string;
}

const TabContentComponent: React.FC<TabContentComponentProps> = ({ activeTab }) => {
    const [customers, setCustomer] = useState<Customer[]>([{id: 0, name: "Kal",msisdn: "+251700**", status: "active"}]);
    
    return (
        <div>
        {activeTab === "Customer Profile" && <div><CustomerProfile customers={customers} /></div>}
        {activeTab === "In Activity Prediction" && <div>Content for Tab 2</div>}
        {activeTab === "Fraude Predication" && <div>Content for Tab 3</div>}
        {activeTab === "Network Activity Prediction" && <div>Content for Tab 4</div>}
        </div>
    );
};

export default TabContentComponent;

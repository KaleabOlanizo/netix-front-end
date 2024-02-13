// TabContentComponent.tsx

import React, { useEffect, useState } from 'react';
import CustomerProfile from './CustomerProfile';
import { baseCustomers } from '../json/sampleData';

interface TabContentComponentProps {
  activeTab: string;
}

const TabContentComponent: React.FC<TabContentComponentProps> = ({ activeTab }) => {
    const [customers, setCustomer] = useState<Customer[]>([]);
      useEffect(() => {
        setCustomer(loadCustomers())
      }, []);
    return (
        <div>
        {activeTab === "Customer Profile" && <div><CustomerProfile customers={customers} /></div>}
        {activeTab === "In Activity Prediction" && <div><CustomerProfile customers={customers} /></div>}
        {activeTab === "Fraude Predication" && <div>Content for Tab 3</div>}
        {activeTab === "Network Activity Prediction" && <div>Content for Tab 4</div>}
        </div>
    );
};
const loadCustomers = () :Customer[] => {
  return baseCustomers;
}

export default TabContentComponent;

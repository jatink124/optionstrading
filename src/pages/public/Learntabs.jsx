import React, { useState } from 'react';

import Learn from '../../Components/Learn';
import LeverageInfo from '../../Components/Learn/Leverageinfo';
import BusinessModels from '../../Components/Learn/BusinessModels';
import Webdesignhostingrelationship from '../../Components/Learn/Webdesignhostingrelationship';
import HostingTables from '../../Components/Learn/HostingTables';

const Learntabs = () => {
  const [activeTab, setActiveTab] = useState('LeverageInfo');

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('LeverageInfo')}
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === 'LeverageInfo' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Leverage Info
        </button>
        <button
          onClick={() => setActiveTab('BusinessModels')}
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === 'BusinessModels' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Business Models
        </button>
        <button
          onClick={() => setActiveTab('WebDesignHosting')}
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === 'WebDesignHosting' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
       Web Design Hosting Relationship
        </button>
        <button
          onClick={() => setActiveTab('HostingTables')}
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === 'HostingTables' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
       Hosting Tables
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'LeverageInfo' && <LeverageInfo />}
        {activeTab === 'BusinessModels' && <BusinessModels/>}
        {activeTab === 'WebDesignHosting' && <Webdesignhostingrelationship/>}
        {activeTab === 'HostingTables' && <HostingTables/>}
      </div>
    </div>
  );
};

export default Learntabs;

import React, { useState } from 'react';
import ChecklistCard from './ChecklistCard';
import ParentComponent from './ParentComponent';
import ThingsToAchieveCard from './ThingsToAchieveCard';
import ReadStrategy from './ReadStrategy';
import VKlevels from '../Crud/VKlevels';
import PredictionCard from './Home/PredictionCard';
import Showotstrategy from './Showotstrategy';

function Mhome() {
  const [selectedComponent, setSelectedComponent] = useState('');

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  return (
    <div className="p-4">
      {/* Dropdown for selecting the component */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select Component</label>
        <select
          className="p-2 border rounded"
          onChange={handleDropdownChange}
          value={selectedComponent}
        >
          <option value="">Select</option>
          <option value="ChecklistCard">ChecklistCard</option>
          <option value="Showotstrategy">Showotstrategy</option>
          <option value="ParentComponent">ParentComponent</option>
          <option value="PredictionCard">PredictionCard</option>
          <option value="ThingsToAchieveCard">ThingsToAchieveCard</option>
          <option value="VKlevels">VKlevels</option>
        </select>
      </div>

      {/* Conditionally render components based on dropdown selection */}
      <div className="flex flex-wrap justify-center gap-4">
        {selectedComponent === 'ChecklistCard' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ChecklistCard />
          </div>
        )}

        {selectedComponent === 'Showotstrategy' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Showotstrategy />
          </div>
        )}

        {selectedComponent === 'ParentComponent' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ParentComponent />
          </div>
        )}

        {selectedComponent === 'PredictionCard' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <PredictionCard />
          </div>
        )}

        {selectedComponent === 'ThingsToAchieveCard' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ThingsToAchieveCard />
          </div>
        )}

        {selectedComponent === 'VKlevels' && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <VKlevels />
          </div>
        )}
      </div>
    </div>
  );
}

export default Mhome;

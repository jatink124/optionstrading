import React, { useState } from 'react';
import Select from 'react-select'; // Import React Select
import ChecklistCard from './ChecklistCard';
import ParentComponent from './ParentComponent';
import ThingsToAchieveCard from './ThingsToAchieveCard';
import VKlevels from '../Crud/VKlevels';
import Showotstrategy from './Showotstrategy';
import PredictionCard from './Home/PredictionCard';

function Mhome() {
  const [selectedComponents, setSelectedComponents] = useState([]);

  const componentsMap = {
    ChecklistCard,
    ParentComponent,
    ThingsToAchieveCard,
    VKlevels,
    Showotstrategy,
    PredictionCard,
  };

  const options = [
    { value: 'ChecklistCard', label: 'Checklist Card' },
    { value: 'ParentComponent', label: 'Parent Component' },
    { value: 'ThingsToAchieveCard', label: 'Things To Achieve Card' },
    { value: 'VKlevels', label: 'VK Levels' },
    { value: 'Showotstrategy', label: 'Show OT Strategy' },
    { value: 'PredictionCard', label: 'Prediction Card' },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedComponents(selectedOptions.map((option) => option.value));
  };

  return (
    <div className="p-4">
      {/* Tagging Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select Components</label>
        <Select
          isMulti
          options={options}
          onChange={handleChange}
          placeholder="Select components..."
          className="w-full"
        />
      </div>

      {/* Dynamically Render Selected Components */}
      <div className="flex flex-wrap justify-center gap-4">
        {selectedComponents.map((componentName) => {
          const Component = componentsMap[componentName];
          return (
            <div key={componentName} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mhome;

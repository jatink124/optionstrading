import React from 'react';
import ChecklistCard from './ChecklistCard';
import ParentComponent from './ParentComponent';
import ThingsToAchieveCard from './ThingsToAchieveCard';
import ReadStrategy from './ReadStrategy';
import VKlevels from '../Crud/VKlevels';

function Mhome() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* ChecklistCard */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ChecklistCard />
      </div>

      {/* ParentComponent */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ParentComponent />
      </div>

      {/* ThingsToAchieveCard */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ThingsToAchieveCard />
      </div>

      {/* ReadStrategy */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ReadStrategy />
      </div>

      {/* VKlevels */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <VKlevels />
      </div>
    </div>
  );
}

export default Mhome;

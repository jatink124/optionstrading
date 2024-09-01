import React from 'react';
import ChecklistCard from './ChecklistCard';
import ParentComponent from './ParentComponent';

function Mhome() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ChecklistCard />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ParentComponent />
      </div>
    </div>
  );
}

export default Mhome;

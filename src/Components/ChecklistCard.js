import React from 'react';
import checklistItems from '../json/checklist.json';

const ChecklistCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Trading Checklist</h2>
        <ul className="list-disc list-inside text-gray-700">
          {checklistItems.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChecklistCard;


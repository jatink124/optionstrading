import React from 'react';

const ChecklistCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Trading Checklist</h2>
        <ul className="list-disc list-inside text-gray-700">
        <li className="mb-2">Save money</li>
        <li className="mb-2">Wait and Think</li>
          <li className="mb-2">Control your trades: take only 6 trades.</li>
          <li className="mb-2">Apply Stop Limit Strategy when 5-minute candle is broken.</li>
          <li className="mb-2">Use 10 EMA, 21 EMA, PDH, PDL support method with a high target and a stop loss of 155.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChecklistCard;

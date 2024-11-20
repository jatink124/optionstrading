import React from 'react';

const StrategyList = ({ strategies }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Strategy List</h3>
      {['Next Day', 'Weekly', 'Monthly'].map((timeframe) => (
        <div key={timeframe} className="mb-4">
          <h4 className="text-lg font-semibold">{timeframe}</h4>
          {strategies.filter((s) => s.timeframe === timeframe).length === 0 ? (
            <p className="text-gray-500">No strategies for {timeframe} yet.</p>
          ) : (
            <ul className="list-disc ml-5">
              {strategies
                .filter((s) => s.timeframe === timeframe)
                .map((s, index) => (
                  <li key={index} className="mb-2">
                    {s.strategyName}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default StrategyList;

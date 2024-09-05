import React from 'react';
import MakeTodayCountCard from './MakeTodayCountCard';

const ZeroProfitLossComponent = () => (
  <div className="text-lg mt-2 text-gray-500">
    <MakeTodayCountCard />
  </div>
);

const TotalProfitLossDisplay = ({ totalProfitLoss, recordCount }) => {
  if (totalProfitLoss == null) {
    return null; // Handle null or undefined totalProfitLoss if needed
  }

  const adjustedTotalProfitLoss = (totalProfitLoss * 100) / 3000;

  let message = '';
  if (adjustedTotalProfitLoss > 15) {
    message = 'Your 16% target is reached';
  } else if (adjustedTotalProfitLoss < -10) {
    message = 'Your loss limit is reached';
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
      <div className="font-bold text-xl mb-2">Total Profit/Loss</div>

      {adjustedTotalProfitLoss === 0 ? (
        <ZeroProfitLossComponent />
      ) : (
        <>
          <p className={`text-2xl ${adjustedTotalProfitLoss > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {adjustedTotalProfitLoss.toFixed(2)} {/* Display with two decimal places */}
          </p>
        </>
      )}

      {message && <p className="text-lg mt-2 font-semibold text-blue-500">{message}</p>}

      <div className="mt-2 text-gray-700">
        <p>Number of trades today: {recordCount}</p>
        {recordCount >= 6 && (
          <p className="text-lg mt-2 font-semibold text-red-500">
            Your Trade Limit is reached, Press Kill switch button
          </p>
        )}
      </div>
    </div>
  );
};

export default TotalProfitLossDisplay;

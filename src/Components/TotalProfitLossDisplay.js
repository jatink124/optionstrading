import React from 'react';

const TotalProfitLossDisplay = ({ totalProfitLoss }) => {
  // Calculate the adjusted totalProfitLoss
  const adjustedTotalProfitLoss = (totalProfitLoss * 100) / 3000;

  // Determine the message to display
  let message = '';
  if (adjustedTotalProfitLoss > 15) {
    message = 'Your 16% target is reached';
  } else if (adjustedTotalProfitLoss < -10) {
    message = 'Your loss limit is reached';
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
      <div className="font-bold text-xl mb-2">Total Profit/Loss</div>
      <p className={`text-2xl ${adjustedTotalProfitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {adjustedTotalProfitLoss.toFixed(2)} {/* Display with two decimal places */}
      </p>
      {message && <p className="text-lg mt-2 font-semibold text-blue-500">{message}</p>}
    </div>
  );
};

export default TotalProfitLossDisplay;

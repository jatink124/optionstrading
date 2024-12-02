import React, { useState } from "react";

function OptionsPerformanceTracker() {
  const [winCount, setWinCount] = useState(0);
  const [profitPerWin, setProfitPerWin] = useState(0);
  const [lossCount, setLossCount] = useState(0);
  const [lossPerLoss, setLossPerLoss] = useState(0);

  // Calculate metrics
  const totalProfit = winCount * profitPerWin - lossCount * lossPerLoss;
  const winLossRatio = lossCount !== 0 ? (winCount / lossCount).toFixed(2) : "N/A";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Options Trading Metrics</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Winning Trades</label>
          <input
            type="number"
            value={winCount}
            onChange={(e) => setWinCount(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter number of winning trades"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Profit per Win</label>
          <input
            type="number"
            value={profitPerWin}
            onChange={(e) => setProfitPerWin(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter profit per winning trade"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Losing Trades</label>
          <input
            type="number"
            value={lossCount}
            onChange={(e) => setLossCount(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter number of losing trades"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Loss per Loss</label>
          <input
            type="number"
            value={lossPerLoss}
            onChange={(e) => setLossPerLoss(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter loss per losing trade"
          />
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Results</h2>
          <p className="text-gray-600">Profit/Loss: <span className="font-bold">{totalProfit}</span></p>
          <p className="text-gray-600">Win/Loss Ratio: <span className="font-bold">{winLossRatio}</span></p>
        </div>
      </div>
    </div>
  );
}

export default OptionsPerformanceTracker;

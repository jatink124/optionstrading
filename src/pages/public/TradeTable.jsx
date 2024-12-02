import React, { useEffect, useState } from "react";

const TradeTable = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/json/tradedata.json")
      .then((response) => response.json())
      .then((data) => setTrades(data))
      .catch((error) => console.error("Error fetching trade data:", error));
  }, []);

  if (!trades || trades.length === 0) {
    return <div className="text-center text-gray-600">Loading trade data...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trade Summary</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Trade Day</th>
              <th className="px-4 py-2 border border-gray-300">No. of Trades</th>
              <th className="px-4 py-2 border border-gray-300">Overall P&L</th>
              <th className="px-4 py-2 border border-gray-300">Net P&L</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => (
              <tr
                key={index}
                className={`${
                  trade.Status === "In Profit"
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {trade["Trade Day"]}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {trade["No. of Trades"]}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {trade["Overall P&L"]}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {trade["Net P&L"]}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {trade.Status}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {trade.Transaction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeTable;

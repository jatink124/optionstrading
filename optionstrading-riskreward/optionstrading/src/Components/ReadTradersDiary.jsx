import React from 'react';

// Utility function to format currency
const formatCurrency = (amount) => amount.replace(/(\d)(?=(\d{3})+(\.))/g, '$1,');

const ReadTradersDiary = ({ data }) => {
  if (!data) {
    return <p>No entries found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Traders Diary Entries</h2>
      {Object.entries(data).map(([month, { Trades, Traded_on_days }]) => (
        <div key={month} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{month} (Traded on {Traded_on_days || 'N/A'} days)</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Trade Day</th>
                <th className="py-2 px-4 border-b">No. of Trades</th>
                <th className="py-2 px-4 border-b">Overall P&L</th>
                <th className="py-2 px-4 border-b">Net P&L</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Transaction</th>
              </tr>
            </thead>
            <tbody>
              {Trades ? Trades.map((entry, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{entry["Trade Day"]}</td>
                  <td className="border px-4 py-2">{entry["No. of Trades"]}</td>
                  <td className="border px-4 py-2">{formatCurrency(entry["Overall P&L"])}</td>
                  <td className="border px-4 py-2">{formatCurrency(entry["Net P&L"])}</td>
                  <td className="border px-4 py-2">{entry["Status"]}</td>
                  <td className="border px-4 py-2">{entry["Transaction"]}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="border px-4 py-2 text-center">No trades available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ReadTradersDiary;

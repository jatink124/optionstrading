import React from "react";

const CompoundingEffect3000 = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Compounding Effect in Options Trading</h1>
      
      <p className="mb-4">
        The <span className="font-semibold">compounding effect</span> in options trading refers to growing your trading capital incrementally by reinvesting profits over multiple trades, leading to exponential growth over time.
      </p>

      <h2 className="text-xl font-semibold mb-2">Step-by-Step Explanation</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Start with ₹3,000 as your capital.</li>
        <li>Set realistic profit targets, e.g., 10% profit per trade (₹300).</li>
        <li>Reinvest your profits into the next trade.</li>
        <li>Repeat this process over multiple trades for exponential growth.</li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">Example of Compounding</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Trade Number</th>
            <th className="border border-gray-300 px-4 py-2">Starting Capital (₹)</th>
            <th className="border border-gray-300 px-4 py-2">Profit (10%)</th>
            <th className="border border-gray-300 px-4 py-2">Ending Capital (₹)</th>
          </tr>
        </thead>
        <tbody>
          {[
            { trade: 1, start: 3000, profit: 300, end: 3300 },
            { trade: 2, start: 3300, profit: 330, end: 3630 },
            { trade: 3, start: 3630, profit: 363, end: 3993 },
            { trade: 4, start: 3993, profit: 399, end: 4392 },
            { trade: 5, start: 4392, profit: 439, end: 4831 },
          ].map((row) => (
            <tr key={row.trade} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{row.trade}</td>
              <td className="border border-gray-300 px-4 py-2">{row.start}</td>
              <td className="border border-gray-300 px-4 py-2">{row.profit}</td>
              <td className="border border-gray-300 px-4 py-2">{row.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-2">Key Principles for Success</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><span className="font-semibold">Risk Management:</span> Limit risk per trade to 2-3% of capital.</li>
        <li><span className="font-semibold">Consistency:</span> Focus on small, regular profits rather than large wins.</li>
        <li><span className="font-semibold">Emotional Discipline:</span> Stick to your trading plan and avoid emotional decisions.</li>
        <li><span className="font-semibold">Scale Gradually:</span> Increase position sizes slowly as your capital grows.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Challenges to Consider</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="font-semibold">Losses Affect Growth:</span> A losing trade can slow the compounding effect.</li>
        <li><span className="font-semibold">Brokerage and Fees:</span> These reduce net profits and should be accounted for.</li>
        <li><span className="font-semibold">Market Conditions:</span> Compounding works best in predictable market trends.</li>
      </ul>
    </div>
  );
};

export default CompoundingEffect3000;

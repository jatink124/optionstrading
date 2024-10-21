import React from 'react';

const TradingInsights = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Trading Insights</h2>
      <p className="mb-4 text-lg">99% of traders are killed by losses.</p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>They lose 1 trade, they risk more.</li>
        <li>They lose 1 trade, they go all-in.</li>
        <li>They lose 1 trade, they get depressed.</li>
        <li>They lose 1 trade, they change system.</li>
        <li>They lose 1 trade, they get angry and give up.</li>
      </ul>
      <p className="text-lg font-bold">Stop.</p>
      <p className="text-lg">Everyone loses.</p>
      <p className="mt-4 text-lg">Start thinking in probabilities.</p>

      <h3 className="text-xl font-semibold mt-6">Key Insights</h3>
      <p className="mb-4 text-lg">
        Excellent traders use sample size to generate profits. 
        Don't get emotionally attached to a single trade.
      </p>
      <p className="mb-4 text-lg">
        Phrases like "just this once" or "only one time" are dangerous for traders.
      </p>
      <p className="text-lg">
        For every trade, simply follow the rules and click. 
        There's no such thing as a "special trade."
      </p>
    </div>
  );
};

export default TradingInsights;

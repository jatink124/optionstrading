import React from 'react';

const TwentyoneEMAComponent = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Using 21 EMA for Intraday Trading</h1>

        <section className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Trend Identification</h2>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>
              <span className="font-bold">Bullish Trend:</span> If the price is consistently above the 21 EMA on a 15-minute chart, it indicates a potential bullish trend. Look for buying opportunities on pullbacks to the EMA.
            </li>
            <li>
              <span className="font-bold">Bearish Trend:</span> If the price is below the 21 EMA, it suggests a bearish trend. Consider selling or shorting opportunities when the price tests the EMA from below.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Entry and Exit Points</h2>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>
              <span className="font-bold">Entry:</span> Enter trades when the price touches or dips below the 21 EMA in an uptrend, or rises above it in a downtrend, then resumes the trend direction.
            </li>
            <li>
              <span className="font-bold">Exit:</span> Exit trades when the price closes below the 21 EMA in an uptrend or above it in a downtrend, signaling potential trend weakness or reversal.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Confirmation with Additional Indicators</h2>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>
              <span className="font-bold">Support and Resistance:</span> Use the 15-minute chart to mark key levels, and utilize the EMA as dynamic support or resistance.
            </li>
            <li>
              <span className="font-bold">EMA Crossovers:</span> Combine the 21 EMA with other EMAs (e.g., 9, 13) for crossover strategies to identify short-term movements.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Risk Management</h2>
          <p className="mt-3">
            Set stop-losses just below the 21 EMA in an uptrend or above it in a downtrend. This helps manage risk by exiting trades if the price moves against your position, potentially indicating a trend reversal.
          </p>
        </section>

        <section className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Time Frame Considerations</h2>
          <p className="mt-3">
            The 21 EMA is effective on the 15-minute timeframe for intraday trends. However, intraday markets can be volatile, so backtest the strategy to ensure it aligns with market conditions.
          </p>
        </section>

        <footer className="text-center mt-6">
          <p className="text-gray-400">Remember, no single indicator guarantees success. Use the 21 EMA as part of a broader trading strategy.</p>
        </footer>
      </div>
    </div>
  );
};

export default TwentyoneEMAComponent;

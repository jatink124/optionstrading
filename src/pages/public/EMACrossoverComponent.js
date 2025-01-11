import React from 'react';

const EMACrossoverComponent = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">EMA Crossover Strategies for 15-Minute Timeframe</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Basic EMA Crossover Strategy</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <span className="font-bold">EMAs Used:</span> 
                <ul className="list-inside list-disc pl-6">
                  <li>Short-term EMA: 9 EMA or 13 EMA for quick reactions to price changes.</li>
                  <li>Medium-term EMA: 21 EMA or 34 EMA to capture the trend.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Bullish Signal (Golden Cross):</span> When the short-term EMA crosses above the medium-term EMA, consider entering a long position. For example, if the 9 EMA crosses above the 21 EMA.
              </li>
              <li>
                <span className="font-bold">Bearish Signal (Death Cross):</span> When the short-term EMA crosses below the medium-term EMA, consider shorting or exiting long positions. For instance, if the 9 EMA crosses below the 21 EMA.
              </li>
            </ul>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Execution</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <span className="font-bold">Entry:</span> Enter a trade soon after the crossover. For long positions, enter when the price confirms the crossover by moving further above the medium-term EMA. For short positions, enter when the price moves below the medium-term EMA after the crossover.
              </li>
              <li>
                <span className="font-bold">Exit:</span> Exit trades when you see the opposite crossover or if other indicators suggest a trend reversal. Set stop-losses near recent swing highs/lows or just beyond the EMA.
              </li>
            </ul>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Advanced EMA Crossover Strategies</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <span className="font-bold">Triple EMA Cross:</span> Use three EMAs: short (e.g., 9), medium (e.g., 21), and long (e.g., 50).
                <ul className="list-inside list-disc pl-6">
                  <li><span className="font-bold">Bullish:</span> When both short and medium EMAs cross above the long EMA, it might signal a stronger trend.</li>
                  <li><span className="font-bold">Bearish:</span> When both short and medium EMAs cross below the long EMA, it indicates a potential strong downtrend.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Filtered Crossover Strategy:</span> Combine EMA crossovers with other indicators like RSI or MACD to filter out false signals:
                <ul className="list-inside list-disc pl-6">
                  <li>Take bullish trades only if RSI is below 70 or MACD shows a bullish divergence.</li>
                  <li>Take bearish trades only if RSI is above 30 or MACD shows a bearish divergence.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Trend Confirmation</h2>
            <p className="mt-3">
              Look for the trend on higher time frames to confirm the direction suggested by the 15-minute EMA crossovers. For example, if the daily chart shows a clear uptrend, bullish signals on the 15-minute chart might be more reliable.
            </p>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Practical Considerations</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <span className="font-bold">Volatility:</span> In highly volatile markets, EMA crossovers can whip-saw, leading to false signals. Adjust the length of the EMAs as needed.
              </li>
              <li>
                <span className="font-bold">Backtesting:</span> Test the strategy on historical data to optimize entry/exit points, stop-loss levels, and EMA periods.
              </li>
              <li>
                <span className="font-bold">Market Context:</span> Remember, EMAs are lagging indicators. Always consider news events, economic releases, and market sentiment.
              </li>
            </ul>
          </section>
        </div>

        <footer className="text-center mt-6">
          <p className="text-gray-400">EMA crossovers can be an effective part of a trading strategy but should be used alongside other tools and analysis for the best results.</p>
        </footer>
      </div>
    </div>
  );
};

export default EMACrossoverComponent;

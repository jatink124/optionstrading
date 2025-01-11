import React from 'react';

const StrategyCard = ({ title, content }) => (
  <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{content}</p>
    </div>
  </div>
);

const RSIandEMAStrategy = () => {
  const strategies = [
    {
      title: "RSI and EMA Strategy",
      content: `Combining the Relative Strength Index (RSI) with Exponential Moving Averages (EMA) can create a robust strategy for identifying potential entry and exit points in trading. Here's a brief overview:

Setup:
- RSI:
  - Overbought: RSI > 70 (indicates a potential reversal downward).
  - Oversold: RSI < 30 (indicates a potential reversal upward).
- EMA:
  - Short-term EMA (e.g., 9 or 13-period) for quick trends.
  - Medium-term EMA (e.g., 21-period) to confirm trend direction.

Basic Strategy:
- Long Entry:
  - Price above 21 EMA.
  - RSI < 30 or showing bullish divergence.
- Short Entry:
  - Price below 21 EMA.
  - RSI > 70 or showing bearish divergence.

Risk Management:
- Set stop losses beyond recent swing highs/lows.
- Adjust position size based on volatility.

This strategy combines RSI's momentum signals with EMA's trend-following approach for intraday or swing trading.`
    },
    {
      title: "Triple EMA Strategy",
      content: `A more advanced strategy uses three EMAs for trend confirmation:

- Short EMA (e.g., 9-period) for quick signals.
- Medium EMA (e.g., 21-period) for trend direction.
- Long EMA (e.g., 50-period) for strong trend alignment.

Entry Signals:
- Bullish: Short < Medium < Long EMAs aligned upward.
- Bearish: Short > Medium > Long EMAs aligned downward.

Exit Strategies:
- Exit long when the short EMA crosses below the medium EMA.
- Exit short when the short EMA crosses above the medium EMA.

This approach helps filter false signals in choppy markets.`
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Trading Strategies</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} title={strategy.title} content={strategy.content} />
        ))}
      </div>
    </div>
  );
};

export default RSIandEMAStrategy;

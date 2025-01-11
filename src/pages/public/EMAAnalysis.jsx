import React, { useState } from "react";

const TypographyCard = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold text-gray-800 tracking-tight">
          {title}
        </h3>
        <span className="text-gray-500 text-lg font-semibold">
          {isExpanded ? "-" : "+"}
        </span>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700 text-base leading-relaxed">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const EMAAnalysis = () => {
  const cardData = [
    {
      title: "Trend Identification",
      content:
        "Uptrend: Price above the 50 EMA suggests a bullish trend. Downtrend: Price below the 50 EMA suggests a bearish trend.",
    },
    {
      title: "Support and Resistance",
      content:
        "The 50 EMA often acts as a dynamic support or resistance level. Traders expect price reversals or continuations near this level.",
    },
    {
      title: "Entry Points",
      content:
        "Buy on pullbacks to the 50 EMA in an uptrend. Sell on rallies to the 50 EMA in a downtrend.",
    },
    {
      title: "Exit Points",
      content:
        "Exit long trades if the price breaks below the 50 EMA. Cover short trades if the price moves above it.",
    },
    {
      title: "Crossover Strategies",
      content:
        "Combine with a short-term EMA for crossover signals. A 9 EMA crossing above the 50 EMA can signal a bullish move.",
    },
    {
      title: "Price Action at EMA",
      content:
        "Observe price interactions with the 50 EMA. Multiple touches reinforce its role as support/resistance.",
    },
    {
      title: "Risk Management",
      content:
        "Use the 50 EMA as a guide for stop-loss placement to manage risk effectively.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
        How 50 EMA is Used for Intraday Trading
      </h2>
      <div className="space-y-6">
        {cardData.map((card, index) => (
          <TypographyCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default EMAAnalysis;

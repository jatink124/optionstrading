import React from "react";

const SniperMindset = () => {
  const points = [
    {
      title: "Develop a Clear Trading Plan",
      why: "A plan ensures you're not shooting in the dark and prevents impulsive decisions.",
      how: [
        "Define your trading goals.",
        "Specify your strategies (e.g., doji patterns in uptrends or downtrends).",
        "Set clear entry and exit criteria, including stop-loss and profit targets.",
        "Decide on risk management rules (e.g., risking 1-2% per trade).",
      ],
    },
    {
      title: "Practice Patience",
      why: "Waiting for the perfect trade setups prevents overtrading.",
      how: [
        "Avoid 'FOMO' (Fear of Missing Out).",
        "Stick to your predefined criteria for entering a trade.",
        "Spend more time observing the market than acting impulsively.",
      ],
    },
    {
      title: "Use Technical and Fundamental Analysis",
      why: "Precision requires knowledge of market movements and trends.",
      how: [
        "Learn to identify key patterns, levels (support/resistance), and indicators.",
        "Stay updated on economic events that could impact market volatility.",
      ],
    },
    {
      title: "Focus on Quality, Not Quantity",
      why: "Overtrading increases the risk of losses and emotional decision-making.",
      how: [
        "Set a daily or weekly limit on the number of trades.",
        "Evaluate each trade's risk/reward ratio and take only high-probability setups.",
      ],
    },
    {
      title: "Manage Your Risk",
      why: "A sniper avoids unnecessary risks to ensure long-term success.",
      how: [
        "Use position sizing to limit losses.",
        "Always have a stop-loss in place.",
        "Avoid risking too much capital on a single trade.",
      ],
    },
  ];

  return (
    <div className="w-full h-screen p-4 bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800 text-center">
        Sniper Mindset in Options Trading
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {point.title}
            </h2>
            <p className="text-base text-gray-700 mb-3">
              <strong>Why:</strong> {point.why}
            </p>
            <ul className="text-base text-gray-700 list-disc list-inside">
              {point.how.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SniperMindset;

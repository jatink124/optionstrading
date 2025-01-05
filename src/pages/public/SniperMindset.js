import React from "react";
import Layout from "./Layout";

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

      <div className="flex flex-col items-center justify-center w-full bg-gray-900 py-12">
        <h1 className="mb-8 text-3xl font-extrabold text-center text-yellow-400 lg:text-5xl">
          Sniper Mindset in Options Trading
        </h1>
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, why, how }, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="mb-4 text-xl font-semibold text-yellow-300">
                {title}
              </h2>
              <p className="mb-4 text-sm text-gray-300">
                <strong className="text-yellow-400">Why:</strong> {why}
              </p>
              <ul className="pl-4 text-sm text-gray-400 list-disc list-inside">
                {how.map((step, i) => (
                  <li key={i} className="mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default SniperMindset;

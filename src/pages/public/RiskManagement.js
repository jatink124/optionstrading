import React from "react";

const RiskManagement = () => {
  const sections = [
    {
      title: "Setting a Risk Percentage",
      content:
        "Allocate only a small portion of your capital for each trade to minimize losses. For example, if you risk 2% of ₹3000 per trade, you risk ₹60.",
      analogy: "Poker Analogy: Never go 'all-in' unless the odds are overwhelmingly in your favor.",
    },
    {
      title: "Position Sizing",
      content:
        "Calculate position size based on your risk. For instance, with a premium of ₹120, you cannot afford a full lot of 25 contracts if risking only ₹60.",
      analogy: "Poker Analogy: Bet chips wisely based on your odds of winning.",
    },
    {
      title: "Setting Stop Loss and Target",
      content:
        "Define a stop-loss and target with a risk-to-reward ratio of at least 1:2. For example, if risking ₹60, aim to gain ₹120.",
      analogy: "Poker Analogy: Fold when the pot odds don’t justify the risk of calling.",
    },
    {
      title: "Avoid Overtrading",
      content:
        "Limit the number of trades per day to reduce emotional decisions. For ₹3000, plan for 1-2 trades per day.",
      analogy: "Poker Analogy: Don’t play every hand. Wait for strong starting hands.",
    },
    {
      title: "Diversification",
      content:
        "Spread your trades over different strike prices or days. Trade one option on Nifty and another on Bank Nifty.",
      analogy: "Poker Analogy: Play at multiple tables with small bets to increase chances of staying profitable.",
    },
    {
      title: "Emotional Control and Discipline",
      content:
        "Stick to your plan and avoid revenge trading. Use a journal to track trades and learn from mistakes.",
      analogy: "Poker Analogy: Don’t tilt after losing a hand; stick to your strategy.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        🌟 Risk Management and Money Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-3">{section.content}</p>
            <p className="text-gray-500 italic">{section.analogy}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-lg font-medium text-blue-700 mb-3">
          Practical Implementation for ₹3000:
        </h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Risk per trade: ₹60 (2%).</li>
          <li>Stop-loss: ₹2-3 per option premium.</li>
          <li>Position size: Options worth ₹60 per trade.</li>
          <li>Max daily loss: ₹120 (4% of capital).</li>
        </ul>
        <p className="text-blue-600 font-semibold mt-4">
          Stay disciplined to reduce losses and grow over time!
        </p>
      </div>
    </div>
  );
};

export default RiskManagement;

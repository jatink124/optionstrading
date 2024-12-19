import React from "react";

const RiskManagement = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Risk Management and Money Management</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">1. Setting a Risk Percentage</h2>
        <p className="text-gray-600">
          Allocate only a small portion of your capital for each trade to minimize losses. For example, if you risk 2% of ₹3000 per trade, you risk ₹60.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Never go "all-in" unless the odds are overwhelmingly in your favor.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">2. Position Sizing</h2>
        <p className="text-gray-600">
          Calculate position size based on your risk. For instance, with a premium of ₹120, you cannot afford a full lot of 25 contracts if risking only ₹60.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Bet chips wisely based on your odds of winning.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">3. Setting Stop Loss and Target</h2>
        <p className="text-gray-600">
          Define a stop-loss and target with a risk-to-reward ratio of at least 1:2. For example, if risking ₹60, aim to gain ₹120.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Fold when the pot odds don’t justify the risk of calling.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">4. Avoid Overtrading</h2>
        <p className="text-gray-600">
          Limit the number of trades per day to reduce emotional decisions. For ₹3000, plan for 1-2 trades per day.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Don’t play every hand. Wait for strong starting hands.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">5. Diversification</h2>
        <p className="text-gray-600">
          Spread your trades over different strike prices or days. Trade one option on Nifty and another on Bank Nifty.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Play at multiple tables with small bets to increase chances of staying profitable.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">6. Emotional Control and Discipline</h2>
        <p className="text-gray-600">
          Stick to your plan and avoid revenge trading. Use a journal to track trades and learn from mistakes.
        </p>
        <p className="text-gray-500 italic">Poker Analogy: Don’t tilt after losing a hand; stick to your strategy.</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-blue-700">Practical Implementation for ₹3000:</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Risk per trade: ₹60 (2%).</li>
          <li>Stop-loss: ₹2-3 per option premium.</li>
          <li>Position size: Options worth ₹60 per trade.</li>
          <li>Max daily loss: ₹120 (4% of capital).</li>
        </ul>
        <p className="text-blue-600 font-semibold mt-2">Stay disciplined to reduce losses and grow over time!</p>
      </div>
    </div>
  );
};

export default RiskManagement;

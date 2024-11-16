import React, { useState } from 'react';

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-6">
      <div 
        className="p-6 bg-blue-600 text-white cursor-pointer rounded-lg shadow-lg" 
        onClick={toggleAnswer}
      >
        <h2 className="text-xl font-bold">
          How to Control Overtrading in Options Trading?
        </h2>
      </div>
      {isOpen && (
        <div className="mt-4 p-6 bg-gray-200 border border-gray-400 rounded-lg shadow-md">
          <p className="mb-4 text-lg">
            Overtrading can lead to increased risks and potential losses. Here are some strategies to help you manage it:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Set a Trading Plan:</strong> Develop a detailed plan with specific goals and risk tolerance. Stick to it, avoiding emotional decisions.
            </li>
            <li>
              <strong>Define Entry and Exit Criteria:</strong> Establish clear rules for when to enter and exit trades to prevent impulsive actions.
            </li>
            <li>
              <strong>Use Risk Management:</strong> Implement techniques like stop-loss orders and limit your capital risk for each trade.
            </li>
            <li>
              <strong>Limit the Number of Trades:</strong> Set a maximum number of trades per day or week to curb excessive trading.
            </li>
            <li>
              <strong>Keep a Trading Journal:</strong> Record all trades, including your rationale and outcomes. Regularly review this to identify patterns.
            </li>
            <li>
              <strong>Take Breaks:</strong> Step away if you feel overwhelmed. Regular breaks help maintain focus and clarity.
            </li>
            <li>
              <strong>Education and Practice:</strong> Continuously learn and practice using demo accounts to refine your strategies without risking real capital.
            </li>
            <li>
              <strong>Stay Calm:</strong> Develop mindfulness and relaxation techniques to manage stress and avoid impulsive decisions.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FAQItem;

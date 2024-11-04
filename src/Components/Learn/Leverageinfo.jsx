import React from 'react';

const LeverageInfo = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Understanding Leverage in Trading</h1>
      <p className="mb-4 text-gray-700">
        Leverage is a powerful tool in trading that allows traders to amplify their potential profits (and losses) by
        using borrowed funds to control a larger position than their initial capital would normally permit. Delta
        Exchange offers leverage on various cryptocurrency futures and options contracts, enabling traders to take
        advantage of market movements with a smaller investment.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Key Concepts of Leverage on Delta Exchange:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <span className="font-semibold">Order Leverage:</span> Refers to the leverage applied to all open orders for a
          specific contract. You can adjust this leverage using the slider in the order placement tab. Changing the
          order leverage will affect all open orders for that contract.
        </li>
        <li>
          <span className="font-semibold">Position Leverage:</span> The leverage applied to your existing open
          positions, calculated based on your current position size and the margin used to maintain the position.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Benefits of Using Leverage:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><span className="font-semibold">Amplified Returns:</span> Leverage can significantly increase potential profits if the market moves in your favor.</li>
        <li><span className="font-semibold">Increased Trading Power:</span> You can control larger positions with a smaller initial investment.</li>
        <li><span className="font-semibold">Flexibility:</span> Adjust your leverage level to suit your risk tolerance and trading strategy.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Risks of Using Leverage:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><span className="font-semibold">Amplified Losses:</span> Leverage can also amplify losses if the market moves against you.</li>
        <li><span className="font-semibold">Liquidation Risk:</span> If your position loses value and falls below the maintenance margin, it may be liquidated to cover losses.</li>
        <li><span className="font-semibold">Increased Volatility:</span> Leverage can make your trading account more susceptible to sudden price swings.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Important Considerations:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><span className="font-semibold">Risk Management:</span> Always have a solid risk management strategy when using leverage.</li>
        <li><span className="font-semibold">Education:</span> Understand the mechanics and risks involved with leverage before using it.</li>
        <li><span className="font-semibold">Start Small:</span> Begin with smaller positions and gradually increase your leverage as you gain experience.</li>
        <li><span className="font-semibold">Diversification:</span> Diversify your portfolio to reduce risk.</li>
        <li><span className="font-semibold">Emotional Control:</span> Avoid impulsive decisions based on fear or greed.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">In Conclusion:</h2>
      <p className="text-gray-700 mb-4">
        Leverage is a double-edged sword. While it can significantly boost potential profits, it also comes with substantial risks. Use leverage responsibly and with a clear understanding of its implications. Always consider your risk tolerance and financial goals before using leverage on Delta Exchange or any other trading platform.
      </p>
    </div>
  );
};

export default LeverageInfo;

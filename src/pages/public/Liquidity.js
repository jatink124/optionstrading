import React from "react";

const Liquidity = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        💧 Understanding Liquidity in Options Trading
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            What is Liquidity?
          </h2>
          <p className="text-gray-600">
            Liquidity in options trading refers to how easily you can buy or
            sell an options contract without causing a significant change in its
            price. Higher liquidity means tighter bid-ask spreads, more volume,
            and faster order execution.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Key Aspects of Liquidity
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Bid-Ask Spread:</strong> Narrow spreads indicate higher
              liquidity, while wider spreads indicate lower liquidity.
            </li>
            <li>
              <strong>Trading Volume:</strong> High volume suggests more
              interest and participation in that options contract.
            </li>
            <li>
              <strong>Open Interest:</strong> High open interest signals strong
              market activity and liquidity.
            </li>
            <li>
              <strong>Underlying Asset Liquidity:</strong> The liquidity of the
              underlying stock or index affects the liquidity of its options.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Why Liquidity Matters
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Ease of Trading:</strong> High liquidity allows you to
              execute trades quickly at desired prices.
            </li>
            <li>
              <strong>Lower Costs:</strong> Tight bid-ask spreads reduce
              transaction costs.
            </li>
            <li>
              <strong>Reduced Slippage:</strong> Orders are filled closer to the
              expected price, minimizing losses due to price movement.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Factors Affecting Liquidity
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Strike Price:</strong> At-the-money options are generally
              more liquid than deep in-the-money or far out-of-the-money
              options.
            </li>
            <li>
              <strong>Expiration Date:</strong> Contracts closer to expiration
              often have higher liquidity, especially in the final week.
            </li>
            <li>
              <strong>Market Sentiment:</strong> Popular or trending stocks and
              indices often see increased options trading activity.
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-500 text-sm text-center mt-8">
        Want to explore more? Learn how to navigate high and low-liquidity
        conditions to optimize your trading strategies.
      </p>
    </div>
  );
};

export default Liquidity;

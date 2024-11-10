import React, { useState } from "react";

const OptionsTradingCalculatorApp = () => {
  const [tradeType, setTradeType] = useState("call");
  const [index, setIndex] = useState("Bank Nifty");
  const [lotSize, setLotSize] = useState("full");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [partialBuyPrice, setPartialBuyPrice] = useState("");
  const [profitPrice, setProfitPrice] = useState(null);

  const calculateProfitPrice = () => {
    const initialLotFraction = lotSize === "full" ? 1 : eval(lotSize); // Convert lot fraction
    const fullLotMultiplier = 15 * 4; // Assuming 4 lots of Bank Nifty with 100 units per lot
    const initialCost = parseFloat(buyPrice) * fullLotMultiplier;
    const additionalCost = parseFloat(partialBuyPrice) * initialLotFraction * 105;

    // Total cost after additional purchase
    const totalCost = initialCost + additionalCost;

    // Calculate the break-even sell price per unit
    const profitSellPrice = (totalCost / fullLotMultiplier).toFixed(2);

    setProfitPrice(profitSellPrice);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Options Trading Calculator</h1>
      
      <p className="mb-6 text-gray-700">
        This calculator helps you determine the minimum sell price per unit needed to break even or make a profit 
        based on your options trading strategy. Enter your initial buy price, desired sell price, and any additional 
        partial buy price to calculate the target profit price for your chosen lot size and index.
      </p>

      {/* Select type */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Type</label>
        <select
          value={tradeType}
          onChange={(e) => setTradeType(e.target.value)}
          className="w-2/3 p-2 border rounded"
        >
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>
        <span className="text-sm text-gray-500 ml-2">Select Call or Put</span>
      </div>

      {/* Select index */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Index</label>
        <select
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          className="w-2/3 p-2 border rounded"
        >
          <option value="Bank Nifty">Bank Nifty</option>
          <option value="Nifty">Nifty</option>
        </select>
        <span className="text-sm text-gray-500 ml-2">Select trading index</span>
      </div>

      {/* Lot to sell */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Lot to Sell</label>
        <select
          value={lotSize}
          onChange={(e) => setLotSize(e.target.value)}
          className="w-2/3 p-2 border rounded"
        >
          <option value="full">Full</option>
          <option value="0.5">½</option>
          <option value="0.33">⅓</option>
          <option value="0.25">¼</option>
        </select>
        <span className="text-sm text-gray-500 ml-2">Choose lot fraction to sell</span>
      </div>

      {/* Buy at */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Buy at</label>
        <input
          type="number"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-2/3 p-2 border rounded"
        />
        <span className="text-sm text-gray-500 ml-2">Initial buy price</span>
      </div>

      {/* Sell at */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Sell at</label>
        <input
          type="number"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          className="w-2/3 p-2 border rounded"
        />
        <span className="text-sm text-gray-500 ml-2">Desired sell price</span>
      </div>

      {/* Partial buy price */}
      <div className="flex items-center mb-4">
        <label className="w-1/3 font-semibold">Partial Buy Price</label>
        <input
          type="number"
          value={partialBuyPrice}
          onChange={(e) => setPartialBuyPrice(e.target.value)}
          className="w-2/3 p-2 border rounded"
        />
        <span className="text-sm text-gray-500 ml-2">Cost of additional buy</span>
      </div>

      {/* Calculate button */}
      <button
        onClick={calculateProfitPrice}
        className="w-full bg-blue-500 text-white p-2 rounded mt-4"
      >
        Calculate Profit Price
      </button>

      {/* Display result */}
      {profitPrice && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>To be in profit, sell at ₹{profitPrice} or above</p>
        </div>
      )}
    </div>
  );
};

export default OptionsTradingCalculatorApp;

import React, { useState, useEffect } from "react";

const Papertrading = () => {
  const [tradeDetails, setTradeDetails] = useState({
    tradeName: "",
    type: "call",
    index: "Bank Nifty",
    lotSize: 15,
    entryPrice: "",
    exitPrice: "",
    strategy: "Institutional Resistance",
    profit: 0,
    targetHit: false,
    stoplossHit: false,
    probableTarget: "",
    stoploss: "",
    enableExitPrice: false,
    dateTime: new Date().toISOString().slice(0, 16),
  });

  const [tradesList, setTradesList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTradeIndex, setEditTradeIndex] = useState(null);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const storedTrades = JSON.parse(localStorage.getItem("trades"));
    if (storedTrades) {
      setTradesList(storedTrades);
    }
  }, []);

  useEffect(() => {
    computeProfit();
  }, [tradeDetails.entryPrice, tradeDetails.exitPrice]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTradeDetails((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const computeProfit = () => {
    if (tradeDetails.entryPrice && tradeDetails.exitPrice) {
      const calculatedProfit = (tradeDetails.exitPrice - tradeDetails.entryPrice) * tradeDetails.lotSize - 49;
      setTradeDetails((prevState) => ({
        ...prevState,
        profit: parseFloat(calculatedProfit.toFixed(2)),
      }));
    }
  };

  const handleTradeAddOrUpdate = () => {
    if (!tradeDetails.entryPrice || !tradeDetails.dateTime) {
      alert("Please fill in all required fields.");
      return;
    }

    const updatedTrades = isEditMode
      ? tradesList.map((t, index) => (index === editTradeIndex ? tradeDetails : t))
      : [...tradesList, tradeDetails];

    setTradesList(updatedTrades);
    localStorage.setItem("trades", JSON.stringify(updatedTrades));

    setIsEditMode(false);
    setEditTradeIndex(null);

    resetTradeForm();
  };

  const resetTradeForm = () => {
    setTradeDetails({
      tradeName: "",
      type: "call",
      index: "Bank Nifty",
      lotSize: 15,
      entryPrice: "",
      exitPrice: "",
      strategy: "Institutional Resistance",
      profit: 0,
      targetHit: false,
      stoplossHit: false,
      probableTarget: "",
      stoploss: "",
      enableExitPrice: false,
      dateTime: new Date().toISOString().slice(0, 16),
    });
  };

  const handleTradeEdit = (index) => {
    setTradeDetails(tradesList[index]);
    setIsEditMode(true);
    setEditTradeIndex(index);
  };

  const handleTradeDelete = (index) => {
    const updatedTrades = tradesList.filter((_, i) => i !== index);
    setTradesList(updatedTrades);
    localStorage.setItem("trades", JSON.stringify(updatedTrades));
  };

  const handleExportToJSON = () => {
    const jsonData = JSON.stringify(tradesList, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const downloadUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "papertrading_trades.json";
    downloadLink.click();
  };

  const handleSortTrades = (criteria) => {
    setSortOption(criteria);
    const sortedTrades = [...tradesList].sort((a, b) => {
      if (criteria === "tradeName") return a.tradeName.localeCompare(b.tradeName);
      if (criteria === "profit") return b.profit - a.profit;
      if (criteria === "entryPrice") return a.entryPrice - b.entryPrice;
      if (criteria === "dateTime") {
        // Sorting by dateTime in descending order for latest first
        return new Date(b.dateTime) - new Date(a.dateTime);
      }
      return 0;
    });
    setTradesList(sortedTrades);
  };
  
  return (
    <div className="flex p-4 max-w-4xl mx-auto bg-white rounded shadow-lg space-x-4">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Paper Trading App</h2>

        <label className="block mb-2">Trade Name</label>
        <input
          type="text"
          name="tradeName"
          value={tradeDetails.tradeName}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Probable Target</label>
        <input
          type="number"
          name="probableTarget"
          value={tradeDetails.probableTarget}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Stoploss</label>
        <input
          type="number"
          name="stoploss"
          value={tradeDetails.stoploss}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Type of Trade</label>
        <select
          name="type"
          value={tradeDetails.type}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>

        <label className="block mb-2">Index</label>
        <select
          name="index"
          value={tradeDetails.index}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="Bank Nifty">Bank Nifty</option>
          <option value="Nifty">Nifty</option>
        </select>

        <label className="block mb-2">Lot Size</label>
        <input
          type="number"
          name="lotSize"
          value={tradeDetails.lotSize}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Entry Price</label>
        <input
          type="number"
          name="entryPrice"
          value={tradeDetails.entryPrice}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Exit Price</label>
        <input
          type="number"
          name="exitPrice"
          value={tradeDetails.exitPrice}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Datetime</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={tradeDetails.dateTime}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Profit</label>
        <input
          type="number"
          value={tradeDetails.profit}
          readOnly
          className="block w-full p-2 mb-4 border rounded bg-gray-100"
        />

        <button
          onClick={handleTradeAddOrUpdate}
          className="bg-blue-500 text-white p-2 rounded w-full mb-4"
        >
          {isEditMode ? "Update Trade" : "Add Trade"}
        </button>
        <button
          onClick={handleExportToJSON}
          className="bg-green-500 text-white p-2 rounded w-full mb-4"
        >
          Export to JSON
        </button>
      </div>

      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-4">Trade List</h3>

        <div className="mb-4">
          <label className="block mb-2">Sort By</label>
          <select
            onChange={(e) => handleSortTrades(e.target.value)}
            value={sortOption}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="tradeName">Trade Name</option>
            <option value="profit">Profit</option>
            <option value="entryPrice">Entry Price</option>
            <option value="dateTime">Date & Time</option>
          </select>
        </div>

        {tradesList.length === 0 ? (
          <p className="text-gray-500">No trades added yet.</p>
        ) : (
          tradesList.map((trade, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded shadow-sm"
            >
              <h4 className="font-bold">{trade.tradeName}</h4>
              <p>Type: {trade.type}</p>
              <p>Index: {trade.index}</p>
              <p>Lot Size: {trade.lotSize}</p>
              <p>Entry Price: ₹{trade.entryPrice}</p>
              <p>Exit Price: ₹{trade.exitPrice}</p>
              <p>Profit: ₹{trade.profit}</p>
              <p>Date: {new Date(trade.dateTime).toLocaleString()}</p>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleTradeEdit(index)}
                  className="bg-yellow-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleTradeDelete(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Papertrading;

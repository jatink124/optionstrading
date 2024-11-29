import React, { useState, useEffect } from 'react';

const Papertrading = () => {
  const [trade, setTrade] = useState({
    tradeName: '',
    type: 'call',
    index: 'Bank Nifty',
    lotSize: 15,
    entryPrice: '',
    exitPrice: '',
    strategy: 'Institutional Resistance',
    profit: 0,
    targetHit: false,
    stoplossHit: false,
  });

  const [trades, setTrades] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('trades'));
    if (localData) {
      setTrades(localData);
    }
  }, []);

  useEffect(() => {
    calculateProfit();
  }, [trade.entryPrice, trade.exitPrice]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTrade((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const calculateProfit = () => {
    if (trade.entryPrice && trade.exitPrice) {
      const profit = (trade.exitPrice - trade.entryPrice) * trade.lotSize - 49;
      setTrade((prev) => ({
        ...prev,
        profit: parseFloat(profit.toFixed(2)),
      }));
    }
  };

  const addOrUpdateTrade = () => {
    if (!trade.entryPrice || !trade.exitPrice) {
      alert('Please enter both Entry Price and Exit Price.');
      return;
    }

    if (isEditing) {
      const updatedTrades = trades.map((t, index) =>
        index === editIndex ? trade : t
      );
      setTrades(updatedTrades);
      localStorage.setItem('trades', JSON.stringify(updatedTrades));
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const updatedTrades = [...trades, trade];
      setTrades(updatedTrades);
      localStorage.setItem('trades', JSON.stringify(updatedTrades));
    }

    setTrade({
      tradeName: '',
      type: 'call',
      index: 'Bank Nifty',
      lotSize: 15,
      entryPrice: '',
      exitPrice: '',
      strategy: 'Institutional Resistance',
      profit: 0,
      targetHit: false,
      stoplossHit: false,
    });
  };

  const editTrade = (index) => {
    setTrade(trades[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteTrade = (index) => {
    const updatedTrades = trades.filter((_, i) => i !== index);
    setTrades(updatedTrades);
    localStorage.setItem('trades', JSON.stringify(updatedTrades));
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(trades, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pttrades.json';
    link.click();
  };

  return (
    <div className="flex p-4 max-w-4xl mx-auto bg-white rounded shadow-lg space-x-4">
      {/* Form Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Paper Trading App</h2>

        <label className="block mb-2">Trade Name</label>
        <input
          type="text"
          name="tradeName"
          value={trade.tradeName}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Type of Trade</label>
        <select
          name="type"
          value={trade.type}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>

        <label className="block mb-2">Index</label>
        <select
          name="index"
          value={trade.index}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="Bank Nifty">Bank Nifty</option>
          <option value="Nifty">Nifty</option>
        </select>

        <label className="block mb-2">Lot Size</label>
        <input
          type="number"
          name="lotSize"
          value={trade.lotSize}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Entry Price</label>
        <input
          type="number"
          name="entryPrice"
          value={trade.entryPrice}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Exit Price</label>
        <input
          type="number"
          name="exitPrice"
          value={trade.exitPrice}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Profit</label>
        <input
          type="number"
          value={trade.profit}
          readOnly
          className="block w-full p-2 mb-4 border rounded bg-gray-100"
        />

        <label className="block mb-2">
          <input
            type="checkbox"
            name="targetHit"
            checked={trade.targetHit}
            onChange={handleChange}
            className="mr-2"
          />
          Target Hit
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            name="stoplossHit"
            checked={trade.stoplossHit}
            onChange={handleChange}
            className="mr-2"
          />
          Stop Loss Hit
        </label>

        <button
          onClick={addOrUpdateTrade}
          className="bg-blue-500 text-white p-2 rounded w-full mb-4"
        >
          {isEditing ? 'Update Trade' : 'Add Trade'}
        </button>
        <button
          onClick={exportToJSON}
          className="bg-green-500 text-white p-2 rounded w-full mb-4"
        >
          Export to JSON
        </button>
      </div>

      {/* Trade List Section */}
      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-4">Trade List</h3>
        {trades.length === 0 ? (
          <p className="text-gray-500">No trades added yet.</p>
        ) : (
          trades.map((t, index) => (
            <div
              key={index}
              className="border p-2 mb-2 rounded flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>Trade Name:</strong> {t.tradeName}
                </p>
                <p>
                  <strong>Type:</strong> {t.type}
                </p>
                <p>
                  <strong>Index:</strong> {t.index}
                </p>
                <p>
                  <strong>Lot Size:</strong> {t.lotSize}
                </p>
                <p>
                  <strong>Entry Price:</strong> {t.entryPrice}
                </p>
                <p>
                  <strong>Exit Price:</strong> {t.exitPrice}
                </p>
                <p>
                  <strong>Profit:</strong> {t.profit}
                </p>
                <p>
                  <strong>Target Hit:</strong> {t.targetHit ? 'Yes' : 'No'}
                </p>
                <p>
                  <strong>Stop Loss Hit:</strong> {t.stoplossHit ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => editTrade(index)}
                  className="bg-yellow-500 text-white p-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTrade(index)}
                  className="bg-red-500 text-white p-1 rounded"
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

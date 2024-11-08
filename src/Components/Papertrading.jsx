import React, { useState } from 'react';

const Papertrading = () => {
  const [trade, setTrade] = useState({
    type: 'call',
    index: 'Bank Nifty',
    lotSize: 15,
    entryPrice: '',
    exitPrice: '',
    strategy: 'Institutional Resistance',
    livePrice: '',
  });

  const [trades, setTrades] = useState(() => JSON.parse(localStorage.getItem('trades')) || []);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isLivePriceChecked, setIsLivePriceChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrade((prev) => ({ ...prev, [name]: value }));
  };

  const addOrUpdateTrade = () => {
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
      type: 'call',
      index: 'Bank Nifty',
      lotSize: 15,
      entryPrice: '',
      exitPrice: '',
      strategy: 'Institutional Resistance',
      livePrice: '',
    });
    setIsLivePriceChecked(false);
  };

  const editTrade = (index) => {
    setTrade(trades[index]);
    setIsEditing(true);
    setEditIndex(index);
    setIsLivePriceChecked(!!trades[index].livePrice);
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
    link.download = 'trades.json';
    link.click();
  };

  return (
    <div className="flex p-4 max-w-4xl mx-auto bg-white rounded shadow-lg space-x-4">
      {/* Form Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Paper Trading App</h2>

        <label className="block mb-2">Type of Trade</label>
        <select name="type" value={trade.type} onChange={handleChange} className="block w-full p-2 mb-4 border rounded">
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>

        <label className="block mb-2">Index</label>
        <select name="index" value={trade.index} onChange={handleChange} className="block w-full p-2 mb-4 border rounded">
          <option value="Bank Nifty">Bank Nifty</option>
          <option value="Nifty">Nifty</option>
        </select>

        <label className="block mb-2">Lot Size</label>
        <select name="lotSize" value={trade.lotSize} onChange={handleChange} className="block w-full p-2 mb-4 border rounded">
          {[15, 25, 30, 45, 50, 60, 75, 90, 105].map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <label className="block mb-2">Live Price</label>
        <input type="number" name="livePrice" value={trade.livePrice} onChange={handleChange} className="block w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={isLivePriceChecked}
            onChange={() => setIsLivePriceChecked(!isLivePriceChecked)}
            className="mr-2"
          />
          Confirm Live Price for Entry
        </label>

        <label className="block mb-2">Entry Price</label>
        <input type="number" name="entryPrice" value={trade.entryPrice} onChange={handleChange} className="block w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Exit Price</label>
        <input
          type="number"
          name="exitPrice"
          value={trade.exitPrice}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
          disabled={!isLivePriceChecked}
        />

        <label className="block mb-2">Strategy</label>
        <select name="strategy" value={trade.strategy} onChange={handleChange} className="block w-full p-2 mb-4 border rounded">
          {['Institutional Resistance', 'Institutional Support', '10Dema', '20Dema', '50Dema', '100Dema'].map((strategy) => (
            <option key={strategy} value={strategy}>{strategy}</option>
          ))}
        </select>

        <button
          onClick={addOrUpdateTrade}
          className="bg-blue-500 text-white p-2 rounded w-full mb-4"
        >
          {isEditing ? 'Update Trade' : 'Add Trade'}
        </button>
        <button onClick={exportToJSON} className="bg-green-500 text-white p-2 rounded w-full mb-4">Export to JSON</button>
      </div>

      {/* Trade List Section */}
      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-4">Trade List</h3>
        {trades.length === 0 ? (
          <p className="text-gray-500">No trades added yet.</p>
        ) : (
          trades.map((t, index) => (
            <div key={index} className="border p-2 mb-2 rounded flex justify-between items-center">
              <div>
                <p><strong>Type:</strong> {t.type}</p>
                <p><strong>Index:</strong> {t.index}</p>
                <p><strong>Lot Size:</strong> {t.lotSize}</p>
                <p><strong>Live Price:</strong> {t.livePrice}</p>
                <p><strong>Entry Price:</strong> {t.entryPrice}</p>
                <p><strong>Exit Price:</strong> {t.exitPrice}</p>
                <p><strong>Strategy:</strong> {t.strategy}</p>
              </div>
              <div>
                <button
                  onClick={() => editTrade(index)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
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

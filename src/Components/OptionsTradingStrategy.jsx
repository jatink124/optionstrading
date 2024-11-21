import React, { useState, useEffect } from 'react';

const OptionTradingStrategy = () => {
  const [strategy, setStrategy] = useState({
    timeframe: 'Next Day',
    strategyName: '',
  });

  const [strategies, setStrategies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch('/strategies.json') // Path to the JSON file in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setStrategies(data))
      .catch((error) => console.error('Error fetching strategies:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStrategy((prev) => ({ ...prev, [name]: value }));
  };

  const addOrUpdateStrategy = () => {
    if (isEditing) {
      const updatedStrategies = strategies.map((s, index) =>
        index === editIndex ? strategy : s
      );
      setStrategies(updatedStrategies);
    } else {
      const updatedStrategies = [...strategies, strategy];
      setStrategies(updatedStrategies);
    }
    setStrategy({
      timeframe: 'Next Day',
      strategyName: '',
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const editStrategy = (index) => {
    setStrategy(strategies[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteStrategy = (index) => {
    const updatedStrategies = strategies.filter((_, i) => i !== index);
    setStrategies(updatedStrategies);
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(strategies, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategies.json';
    link.click();
  };

  return (
    <div className="flex p-8 max-w-6xl mx-auto bg-white rounded shadow-lg space-x-8 h-[600px]">
      {/* Form Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Option Trading Strategy</h2>

        <label className="block mb-2">Timeframe</label>
        <select
          name="timeframe"
          value={strategy.timeframe}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="Next Day">Next Day</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>

        <label className="block mb-2">Strategy Name</label>
        <textarea
          name="strategyName"
          value={strategy.strategyName}
          onChange={handleChange}
          className="block w-full h-24 p-4 mb-4 border rounded resize-none"
          placeholder="Enter strategy name"
        ></textarea>

        <button
          onClick={addOrUpdateStrategy}
          className="bg-blue-500 text-white p-2 rounded w-full mb-4"
        >
          {isEditing ? 'Update Strategy' : 'Add Strategy'}
        </button>
        <button
          onClick={exportToJSON}
          className="bg-green-500 text-white p-2 rounded w-full mb-4"
        >
          Export to JSON
        </button>
      </div>

      {/* Strategy List Section */}
      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-4">Strategy List</h3>
        {['Next Day', 'Weekly', 'Monthly'].map((timeframe) => (
          <div key={timeframe} className="mb-4">
            <h4 className="text-lg font-semibold">{timeframe}</h4>
            {strategies.filter((s) => s.timeframe === timeframe).length === 0 ? (
              <p className="text-gray-500">No strategies for {timeframe} yet.</p>
            ) : (
              <ul className="list-disc ml-5">
                {strategies
                  .filter((s) => s.timeframe === timeframe)
                  .map((s, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                      {s.strategyName}
                      <div>
                        <button
                          onClick={() => editStrategy(index)}
                          className="bg-yellow-500 text-white p-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteStrategy(index)}
                          className="bg-red-500 text-white p-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionTradingStrategy;

// src/components/StrategyTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrategyTable = () => {
  const [strategies, setStrategies] = useState([]);
  const [newStrategy, setNewStrategy] = useState({ todaysStrategy: '', thingsToDo: '' });
  const [editingStrategy, setEditingStrategy] = useState(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/strategies');
        setStrategies(response.data);
      } catch (error) {
        console.error('Error fetching strategies:', error);
      }
    };

    fetchStrategies();
  }, []);

  const handleAddStrategy = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/strategies', newStrategy);
      setStrategies([...strategies, response.data]);
      setNewStrategy({ todaysStrategy: '', thingsToDo: '' });
    } catch (error) {
      console.error('Error adding strategy:', error);
    }
  };

  const handleDeleteStrategy = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/strategies/${id}`);
      setStrategies(strategies.filter(strategy => strategy.id !== id));
    } catch (error) {
      console.error('Error deleting strategy:', error);
    }
  };

  const handleUpdateStrategy = async (id, updatedStrategy) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/strategies/${id}`, updatedStrategy);
      setStrategies(strategies.map(strategy => 
        strategy.id === id ? response.data : strategy
      ));
      setEditingStrategy(null);
    } catch (error) {
      console.error('Error updating strategy:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Strategies</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Today's Strategy"
          value={newStrategy.todaysStrategy}
          onChange={(e) => setNewStrategy({ ...newStrategy, todaysStrategy: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="List of Things to Do"
          value={newStrategy.thingsToDo}
          onChange={(e) => setNewStrategy({ ...newStrategy, thingsToDo: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddStrategy}
          className="bg-blue-500 text-white p-2"
        >
          Add Strategy
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Today's Strategy</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">List of Things to Do</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {strategies.map((strategy) => (
            <tr key={strategy.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{strategy.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{strategy.todaysStrategy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{strategy.thingsToDo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleDeleteStrategy(strategy.id)}
                  className="bg-red-500 text-white p-1 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => setEditingStrategy(strategy)}
                  className="bg-yellow-500 text-white p-1 mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStrategy && (
        <div className="mt-4 p-4 border border-gray-200 rounded">
          <h2 className="text-xl font-bold mb-2">Edit Strategy</h2>
          <input
            type="text"
            placeholder="Today's Strategy"
            value={editingStrategy.todaysStrategy}
            onChange={(e) => setEditingStrategy({ ...editingStrategy, todaysStrategy: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="List of Things to Do"
            value={editingStrategy.thingsToDo}
            onChange={(e) => setEditingStrategy({ ...editingStrategy, thingsToDo: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={() => handleUpdateStrategy(editingStrategy.id, editingStrategy)}
            className="bg-green-500 text-white p-2"
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditingStrategy(null)}
            className="bg-gray-500 text-white p-2 ml-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default StrategyTable;
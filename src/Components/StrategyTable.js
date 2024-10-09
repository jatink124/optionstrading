import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import your Modal component

const StrategyTable = () => {
  const [strategies, setStrategies] = useState([]);
  const [newStrategy, setNewStrategy] = useState({ todaysStrategy: '', thingsToDo: '' });
  const [editingStrategy, setEditingStrategy] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState({});
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://crud-2-6ptv.onrender.com/api/strategies');
        setStrategies(response.data);
      } catch (error) {
        setError('Error fetching strategies');
        console.error('Error fetching strategies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStrategies();
  }, []);

  // Sort strategies by creation date (most recent first)
  const sortedStrategies = [...strategies].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleAddStrategy = async () => {
    try {
      const response = await axios.post('https://crud-2-6ptv.onrender.com/api/strategies', newStrategy);
      setStrategies([...strategies, response.data]);
      setNewStrategy({ todaysStrategy: '', thingsToDo: '' });
    } catch (error) {
      setError('Error adding strategy');
      console.error('Error adding strategy:', error);
    }
  };

  const handleDeleteStrategy = async (id) => {
    try {
      await axios.delete(`https://crud-2-6ptv.onrender.com/api/strategies/${id}`);
      setStrategies(strategies.filter(strategy => strategy._id !== id));
    } catch (error) {
      setError('Error deleting strategy');
      console.error('Error deleting strategy:', error);
    }
  };

  const handleUpdateStrategy = async (id, updatedStrategy) => {
    try {
      const response = await axios.put(`https://crud-2-6ptv.onrender.com/api/strategies/${id}`, updatedStrategy);
      setStrategies(strategies.map(strategy => 
        strategy._id === id ? response.data : strategy
      ));
      setEditingStrategy(null);
    } catch (error) {
      setError('Error updating strategy');
      console.error('Error updating strategy:', error);
    }
  };

  const handleTaskStatusChange = (strategyId, taskIndex) => {
    setTaskStatuses(prev => ({
      ...prev,
      [strategyId]: {
        ...prev[strategyId],
        [taskIndex]: !prev[strategyId]?.[taskIndex]
      }
    }));
  };

  const splitTasks = (thingsToDo) => {
    return thingsToDo.split(/\d+\.\s*/).filter(task => task.trim() !== "");
  };

  const openModal = (strategy) => {
    setSelectedStrategy(strategy);
  };

  const closeModal = () => {
    setSelectedStrategy(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Strategies</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

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

      <div className="overflow-x-auto">
        <table className="min-w-full w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '150px' }}>
                Today's Strategy
              </th>
              <th className="px-6 py-3 w-1/4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tasks</th>
              <th className="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedStrategies.map((strategy, index) => (
              <tr key={strategy._id}>
                <td
                  className={`px-2 py-4 ${index === 0 ? 'text-2xl font-bold text-black' : 'text-base text-gray-700'}`}
                  style={{
                    width: '650px',
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    maxHeight: '3rem',
                    lineHeight: '1.75rem',
                    fontWeight: index === 0 ? '700' : '500', // Bolder for the latest strategy
                  }}
                >
                  {strategy.todaysStrategy}
                </td>

                <td className="px-6 py-4 w-1/4 whitespace-nowrap text-sm text-gray-500">
                  <button onClick={() => openModal(strategy)} className="bg-blue-500 text-white p-1">
                    View Tasks
                  </button>
                </td>
                <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-500">
                  {strategy.createdAt}
                </td>
                <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-500">
                  <button onClick={() => handleDeleteStrategy(strategy._id)} className="bg-red-500 text-white p-1 mr-2">
                    Delete
                  </button>
                  <button onClick={() => setEditingStrategy(strategy)} className="bg-yellow-500 text-white p-1 mr-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStrategy && (
        <Modal onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Tasks for {selectedStrategy.todaysStrategy}</h2>
          <ul className="mb-4">
            {splitTasks(selectedStrategy.thingsToDo).map((task, index) => (
              <li key={`${selectedStrategy._id}-${index}`} className="flex items-center mb-2">
                <span className="mr-2">{task}</span>
                <input
                  type="checkbox"
                  checked={taskStatuses[selectedStrategy._id]?.[index] || false}
                  onChange={() => handleTaskStatusChange(selectedStrategy._id, index)}
                />
              </li>
            ))}
          </ul>
          <button onClick={closeModal} className="bg-gray-500 text-white p-2">
            Close
          </button>
        </Modal>
      )}

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
          <button onClick={() => handleUpdateStrategy(editingStrategy._id, editingStrategy)} className="bg-green-500 text-white p-2">
            Save Changes
          </button>
          <button onClick={() => setEditingStrategy(null)} className="bg-gray-500 text-white p-2 ml-2">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default StrategyTable;

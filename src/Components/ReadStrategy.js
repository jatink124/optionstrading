import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadModal from './ReadModal';

const ReadStrategy = () => {
  const [strategies, setStrategies] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get('https://crud1-xoqf.onrender.com/api/strategies');
        setStrategies(response.data);
      } catch (error) {
        console.error('Error fetching strategies:', error);
      }
    };

    fetchStrategies();
  }, []);

  const handleOpenModal = (strategy) => {
    setSelectedStrategy(strategy);
  };

  const handleCloseModal = () => {
    setSelectedStrategy(null);
  };

  const handleTaskStatusChange = (index) => {
    if (selectedStrategy) {
      const updatedTasks = selectedStrategy.thingsToDo
        .split(/[0-9]+\.\s/)
        .filter(task => task)
        .map((task, i) => (i === index ? { task, completed: !selectedStrategy.completedTasks[i] } : { task, completed: selectedStrategy.completedTasks[i] }));

      setSelectedStrategy({ ...selectedStrategy, completedTasks: updatedTasks.map(task => task.completed) });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Strategies</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Today's Strategy</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">List of Things to Do</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {strategies.map((strategy) => (
            <tr key={strategy.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{strategy.todaysStrategy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ul>
                  {strategy.thingsToDo.split(/[0-9]+\.\s/).filter(task => task).map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOpenModal(strategy)}
                  className="bg-blue-500 text-white p-1 mt-2"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStrategy && (
        <ReadModal
          strategy={selectedStrategy}
          onClose={handleCloseModal}
          onTaskStatusChange={handleTaskStatusChange}
        />
      )}
    </div>
  );
};

export default ReadStrategy;

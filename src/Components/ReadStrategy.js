import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadModal from './ReadModal';

const ReadStrategy = () => {
  const [strategies, setStrategies] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/strategies`);
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
        .map((task, i) => (
          i === index 
            ? { task, completed: !selectedStrategy.completedTasks[i] }
            : { task, completed: selectedStrategy.completedTasks[i] }
        ));

      setSelectedStrategy({ 
        ...selectedStrategy, 
        completedTasks: updatedTasks.map(task => task.completed) 
      });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Strategies</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700 uppercase tracking-wide">
              Today's Strategy
            </th>
            <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700 uppercase tracking-wide">
              List of Things to Do
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {strategies.map((strategy) => (
            <tr key={strategy.id}>
              <td className="px-6 py-6 whitespace-nowrap text-lg text-gray-600">
                {strategy.todaysStrategy}
              </td>
              <td className="px-6 py-6 whitespace-nowrap text-lg text-gray-600">
                <ul className="list-disc pl-5">
                  {strategy.thingsToDo.split(/[0-9]+\.\s/).filter(task => task).map((task, index) => (
                    <li key={index} className="mb-2">{task}</li> 
                  ))}
                </ul>
                <button
                  onClick={() => handleOpenModal(strategy)}
                  className="bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded hover:bg-blue-700 transition duration-300"
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

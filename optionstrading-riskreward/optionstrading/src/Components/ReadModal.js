import React, { useState } from 'react';
import axios from 'axios';

const ReadModal = ({ strategy, onClose, onTaskStatusChange }) => {
  const [tasks, setTasks] = useState(
    strategy.thingsToDo ? strategy.thingsToDo.split(/[0-9]+\.\s/).filter(task => task) : []
  );

  const handleTaskStatusChange = async (index) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks[index];
    updatedTasks.splice(index, 1); // Remove task from the list

    try {
      // Update state
      setTasks(updatedTasks);

      // Update the strategy with removed tasks
      const updatedStrategy = { ...strategy, thingsToDo: updatedTasks.join(' ') };

      // Send request to backend
      await axios.put(`https://crud1-xoqf.onrender.com/api/strategies/${strategy.id}`, updatedStrategy);

      // Notify parent component of task status change
      onTaskStatusChange(index);
    } catch (error) {
      console.error('Error updating strategy:', error);
      // Revert changes on error
      setTasks([...tasks]);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Tasks for {strategy?.todaysStrategy || 'Strategy'}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 flex items-center">
              <input
                type="checkbox"
                checked={!tasks.includes(task)}
                onChange={() => handleTaskStatusChange(index)}
                className="mr-2"
              />
              {task}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="bg-blue-500 text-white p-2 mt-4">Close</button>
      </div>
    </div>
  );
};

export default ReadModal;

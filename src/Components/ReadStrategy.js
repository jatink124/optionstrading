import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadModal from './ReadModal';

// Helper function to format a date in YYYY-MM-DD format
const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ReadStrategy = () => {
  const [strategies, setStrategies] = useState([]);
  const [todayStrategy, setTodayStrategy] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/strategies`);

        // Sort strategies by createdAt date in descending order (most recent first)
        const sortedStrategies = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Set the most recent strategy as today's strategy
        if (sortedStrategies.length > 0) {
          setTodayStrategy(sortedStrategies[0]); // Show the most recent strategy first
        }

        setStrategies(sortedStrategies); // Store sorted strategies
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

  return (
    <div className="p-8">
   

      {todayStrategy ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-auto max-w-lg flex-grow mb-8 transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Most Recent Strategy</h2>
          <p className="text-lg font-medium text-gray-700 mb-4">{todayStrategy.todaysStrategy}</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">List of Things to Do</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {todayStrategy.thingsToDo
              .split(/[0-9]+\.\s/)
              .filter(task => task)
              .map((task, index) => (
                <li key={index} className="mb-2">{task}</li>
              ))}
          </ul>
          <button
            onClick={() => handleOpenModal(todayStrategy)}
            className="bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded hover:bg-blue-700 transition duration-300"
          >
            View
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-600">No strategy available for today.</p>
      )}

      {selectedStrategy && (
        <ReadModal
          strategy={selectedStrategy}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ReadStrategy;

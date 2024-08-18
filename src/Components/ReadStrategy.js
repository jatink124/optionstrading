// src/components/StrategyTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadStrategy = () => {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get('https://crud-46zy.onrender.com/api/strategies');
       
        setStrategies(response.data);
      } catch (error) {
        console.error('Error fetching strategies:', error);
      }
    };

    fetchStrategies();
  }, []);

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
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{strategy.thingsToDo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadStrategy;

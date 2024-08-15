import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API Function
const fetchPredictions = async () => {
  // const response = await axios.get('http://localhost:5000/api/predictions');
  const response = await axios.get('https://crud1-xoqf.onrender.com/api/predictions');
  return response.data;
};

function PredictionRead() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPredictions = async () => {
      try {
        const data = await fetchPredictions();
        setPredictions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPredictions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {predictions.length === 0 ? (
        <p>No predictions found.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Analyst Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nifty Prediction</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Banknifty Prediction</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {predictions.map(prediction => (
              <tr key={prediction.index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prediction.index}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prediction.tradeAnalystName}</td>
                <td className="px-6 py-4 max-w-xs break-words text-lg text-black-500">{prediction.niftyPrediction}</td>
                <td className="px-6 py-4 max-w-lg break-words text-lg text-black-500">{prediction.bankniftyPrediction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PredictionRead;

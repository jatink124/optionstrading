import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API Function
const fetchPredictions = async () => {
  const response = await axios.get(`${API_BASE_URL}/predictions`);
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
        // Sort predictions by updatedAt in descending order (most recent first)
        const sortedPredictions = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setPredictions(sortedPredictions);
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
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Analyst Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nifty Prediction</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Banknifty Prediction</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {predictions.map((prediction, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-lg text-gray-500">{new Date(prediction.updatedAt).toLocaleString()}</td>
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

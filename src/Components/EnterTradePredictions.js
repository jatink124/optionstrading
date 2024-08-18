import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import './EnterTradePredictions.css'; // Import the custom CSS

// Fetch predictions from the server
const fetchPredictions = async () => {
  const response = await axios.get('https://crud1-xoqf.onrender.com/api/predictions');
  return response.data;
};

// Update prediction on the server
const updatePrediction = async (updatedPrediction) => {
  const response = await axios.put(`https://crud1-xoqf.onrender.com/api/predictions/${updatedPrediction.index}`, updatedPrediction);
  return response.data;
};

// Delete prediction from the server
const deletePrediction = async (index) => {
  await axios.delete(`https://crud1-xoqf.onrender.com/api/predictions/${index}`);
};

// Create a new prediction on the server
const createPrediction = async (newPrediction) => {
  const response = await axios.post('https://crud1-xoqf.onrender.com/api/predictions', newPrediction);
  return response.data;
};

function EnterTradePredictions() {
  const queryClient = useQueryClient();
  const [editingPrediction, setEditingPrediction] = useState(null);
  const [formData, setFormData] = useState({});
  const [newPrediction, setNewPrediction] = useState({});

  const { data: predictions, isLoading, isError, error } = useQuery({
    queryKey: ['predictions'],
    queryFn: fetchPredictions
  });

  const updateMutation = useMutation({
    mutationFn: updatePrediction,
    onSuccess: () => {
      queryClient.invalidateQueries(['predictions']);
      setEditingPrediction(null);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deletePrediction,
    onSuccess: () => {
      queryClient.invalidateQueries(['predictions']);
    }
  });

  const createMutation = useMutation({
    mutationFn: createPrediction,
    onSuccess: () => {
      queryClient.invalidateQueries(['predictions']);
      setNewPrediction({});
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  const handleEditClick = (prediction) => {
    setEditingPrediction(prediction);
    setFormData({ ...prediction });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleNewPredictionChange = (e) => {
    const { name, value } = e.target;
    setNewPrediction(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const handleNewPredictionSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(newPrediction);
  };

  const handleDelete = (index) => {
    deleteMutation.mutate(index);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Predictions</h2>

      {/* New Prediction Form */}
      <div className="mb-4 p-4 border border-gray-300 rounded">
        <h3 className="text-lg font-semibold mb-2">Add New Prediction</h3>
        <form onSubmit={handleNewPredictionSubmit}>
          <div className="mb-4 input-container">
            <input
              id="newTradeAnalystName"
              name="tradeAnalystName"
              type="text"
              placeholder=" "
              value={newPrediction.tradeAnalystName || ''}
              onChange={handleNewPredictionChange}
              className="mt-1 block w-full"
              required
            />
            <label htmlFor="newTradeAnalystName">Trade Analyst Name</label>
          </div>
          <div className="mb-4 input-container">
            <input
              id="newNiftyPrediction"
              name="niftyPrediction"
              type="text"
              placeholder=" "
              value={newPrediction.niftyPrediction || ''}
              onChange={handleNewPredictionChange}
              className="mt-1 block w-full"
              required
            />
            <label htmlFor="newNiftyPrediction">Nifty Prediction</label>
          </div>
          <div className="mb-4 input-container">
            <textarea
              id="newBankniftyPrediction"
              name="bankniftyPrediction"
              placeholder=" "
              value={newPrediction.bankniftyPrediction || ''}
              onChange={handleNewPredictionChange}
              className="mt-1 block w-full resize-y"
              required
            />
            <label htmlFor="newBankniftyPrediction">Banknifty Prediction</label>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Prediction
          </button>
        </form>
      </div>

      {predictions.length === 0 ? (
        <p>No predictions found.</p>
      ) : (
        <>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Analyst Name</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nifty Prediction</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Banknifty Prediction</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {predictions.map(prediction => (
                <tr key={prediction.index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prediction.index}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prediction.tradeAnalystName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prediction.niftyPrediction}</td>
                  <td className="px-6 py-4 multiline text-lg text-gray-500">{prediction.bankniftyPrediction}</td>
                  <td className="px-6 py-4 multiline text-lg text-gray-500">
                    <button 
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEditClick(prediction)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(prediction.index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Edit Form */}
          {editingPrediction && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h3 className="text-lg font-semibold mb-2">Edit Prediction</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 input-container">
                  <input
                    id="tradeAnalystName"
                    name="tradeAnalystName"
                    type="text"
                    placeholder=" "
                    value={formData.tradeAnalystName || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                    required
                  />
                  <label htmlFor="tradeAnalystName">Trade Analyst Name</label>
                </div>
                <div className="mb-4 input-container">
                  <input
                    id="niftyPrediction"
                    name="niftyPrediction"
                    type="text"
                    placeholder=" "
                    value={formData.niftyPrediction || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                    required
                  />
                  <label htmlFor="niftyPrediction">Nifty Prediction</label>
                </div>
                <div className="mb-4 input-container">
                  <textarea
                    id="bankniftyPrediction"
                    name="bankniftyPrediction"
                    placeholder=" "
                    value={formData.bankniftyPrediction || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full resize-y"
                    required
                  />
                  <label htmlFor="bankniftyPrediction">Banknifty Prediction</label>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setEditingPrediction(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EnterTradePredictions;

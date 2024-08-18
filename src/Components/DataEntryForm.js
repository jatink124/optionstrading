import React, { useState } from 'react';
import axios from 'axios';

const DataEntryForm = ({ onEntryAdded }) => {
  const [formData, setFormData] = useState({
    date: '',
    lessonsLearned: '',
    recommendations: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    axios.post('https://crud-46zy.onrender.com/repdata', formData)
      .then(response => {
        console.log('Data added:', response.data);
        setFormData({
          date: '',
          lessonsLearned: '',
          recommendations: ''
        });
        setLoading(false);
        onEntryAdded();  // Notify parent component to fetch updated data
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('Failed to add entry. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lessonsLearned" className="mb-1">Lessons Learned:</label>
          <textarea
            id="lessonsLearned"
            name="lessonsLearned"
            value={formData.lessonsLearned}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="recommendations" className="mb-1">Recommendations:</label>
          <textarea
            id="recommendations"
            name="recommendations"
            value={formData.recommendations}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition duration-200" disabled={loading}>
          {loading ? 'Processing...' : 'Add Entry'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DataEntryForm;

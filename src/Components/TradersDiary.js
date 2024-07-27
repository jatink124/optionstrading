import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadTradersDiary from './ReadTradersDiary';

const TradersDiary = () => {
  const [formData, setFormData] = useState({
    index: '',           // Initialize index as empty string
    tradeDay: '',
    numberOfTrades: '',
    overallPL: '',
    netPL: '',
    status: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(1);  // Initialize currentIndex state

  useEffect(() => {
    // Fetch last index from the server when component mounts
    axios.get('http://localhost:5000/tradersdiary/lastIndex')
      .then(response => {
        const lastIndexedEntry = response.data;
        const newIndex = parseInt(lastIndexedEntry.index, 10) + 1; // Ensure newIndex is treated as a number
        setCurrentIndex(newIndex);
      })
      .catch(error => {
        console.error('Error fetching last index:', error);
        // Handle error if necessary
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

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

    // Ensure index is set correctly for the new entry
    const newIndex = currentIndex;
    setFormData({
      ...formData,
      index: newIndex.toString()  // Assuming index needs to be a string in formData
    });

    axios.post('http://localhost:5000/tradersdiary', formData)
      .then(response => {
        console.log('Data added:', response.data);
        setFormData({
          index: '',               // Clear form data after submission
          tradeDay: '',
          numberOfTrades: '',
          overallPL: '',
          netPL: '',
          status: ''
        });
        setLoading(false);
        // Increment currentIndex for next entry
        setCurrentIndex(prevIndex => prevIndex + 1);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('Failed to add entry. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {/* Index field */}
          <div className="flex flex-col">
            <label htmlFor="index" className="mb-1">Index:</label>
            <input
              id="index"
              type="text"
              name="index"
              value={currentIndex}   // Display current index in input
              readOnly  // Make it read-only to prevent user input
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* New fields */}
          <div className="flex flex-col">
            <label htmlFor="tradeDay" className="mb-1">Trade Day:</label>
            <input
              id="tradeDay"
              type="text"
              name="tradeDay"
              value={formData.tradeDay}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="numberOfTrades" className="mb-1">Number of Trades:</label>
            <input
              id="numberOfTrades"
              type="text"
              name="numberOfTrades"
              value={formData.numberOfTrades}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="overallPL" className="mb-1">Overall P&amp;L:</label>
            <input
              id="overallPL"
              type="text"
              name="overallPL"
              value={formData.overallPL}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="netPL" className="mb-1">Net P&amp;L:</label>
            <input
              id="netPL"
              type="text"
              name="netPL"
              value={formData.netPL}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-1">Status:</label>
            <input
              id="status"
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md col-span-2 hover:bg-blue-600 transition duration-200" disabled={loading}>
            {loading ? 'Processing...' : 'Add Entry'}
          </button>
        </form>
        {/* Error handling */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Additional component */}
      <ReadTradersDiary/>
    </div>
  );
};

export default TradersDiary;

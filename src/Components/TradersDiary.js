import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import ReadTradersDiary from './ReadTradersDiary';

// Fetch entries from the server
const fetchEntries = async () => {
  const response = await axios.get('http://localhost:5000/tradersdiary');
  return response.data;
};

// Post new entry to the server
const postEntry = async (entry) => {
  await axios.post('http://localhost:5000/tradersdiary', entry);
};

const TradersDiary = () => {
  const [formData, setFormData] = useState({
    tradeDay: '',
    numberOfTrades: '',
    overallPL: '',
    netPL: '',
    status: ''
  });

  const queryClient = useQueryClient();

  const { data: entries, isLoading, isError, error } = useQuery({
    queryKey: ['entries'],
    queryFn: fetchEntries
  });

  const mutation = useMutation({
    mutationFn: postEntry,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['entries']);
      // Reset form
      setFormData({
        tradeDay: '',
        numberOfTrades: '',
        overallPL: '',
        netPL: '',
        status: ''
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {/* Form fields */}
          <div className="flex flex-col">
            <label htmlFor="tradeDay" className="mb-1">Trade Day:</label>
            <input
              id="tradeDay"
              type="date"
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
            <label htmlFor="overallPL" className="mb-1">Overall P&L:</label>
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
            <label htmlFor="netPL" className="mb-1">Net P&L:</label>
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
          <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md col-span-2 hover:bg-blue-600 transition duration-200" disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Processing...' : 'Add Entry'}
          </button>
        </form>
        {/* Error handling */}
        {mutation.isError && <p className="text-red-500 mt-2">{mutation.error.message}</p>}
      </div>

      <ReadTradersDiary />
    </div>
  );
};

export default TradersDiary;

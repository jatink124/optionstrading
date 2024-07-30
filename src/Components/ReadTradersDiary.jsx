import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Fetch entries from the server
const fetchEntries = async () => {
  const response = await axios.get('http://localhost:5000/tradersdiary');
  return response.data;
};

// Update entry on the server
const updateEntry = async (updatedEntry) => {
  const response = await axios.put(`http://localhost:5000/tradersdiary/${updatedEntry.index}`, updatedEntry);
  return response.data;
};

function ReadTradersDiary() {
  const queryClient = useQueryClient();
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({});
  
  const { data: entries, isLoading, isError, error } = useQuery({
    queryKey: ['entries'],
    queryFn: fetchEntries
  });

  const mutation = useMutation({
    mutationFn: updateEntry,
    onSuccess: () => {
      queryClient.invalidateQueries(['entries']);
      setEditingEntry(null);
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  const handleEditClick = (entry) => {
    setEditingEntry(entry);
    setFormData({ ...entry });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Traders Diary Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Day</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Trades</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall P&L</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net P&L</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {entries.map(entry => (
                <tr key={entry.index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.index}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.tradeDay}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.numberOfTrades}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.overallPL}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.netPL}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditClick(entry)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Edit Form */}
          {editingEntry && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h3 className="text-lg font-semibold mb-2">Edit Entry</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="tradeDay">Trade Day</label>
                  <input
                    id="tradeDay"
                    name="tradeDay"
                    type="text"
                    value={formData.tradeDay || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="numberOfTrades">Number of Trades</label>
                  <input
                    id="numberOfTrades"
                    name="numberOfTrades"
                    type="number"
                    value={formData.numberOfTrades || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="overallPL">Overall P&L</label>
                  <input
                    id="overallPL"
                    name="overallPL"
                    type="text"
                    value={formData.overallPL || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="netPL">Net P&L</label>
                  <input
                    id="netPL"
                    name="netPL"
                    type="text"
                    value={formData.netPL || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="status">Status</label>
                  <input
                    id="status"
                    name="status"
                    type="text"
                    value={formData.status || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    required
                  />
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
                  onClick={() => setEditingEntry(null)}
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

export default ReadTradersDiary;

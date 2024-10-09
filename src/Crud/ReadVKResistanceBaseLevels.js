import API_BASE_URL from './config';
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch data
const fetchData = async () => {
  const response = await axios.get(`${API_BASE_URL}/vk`);
  return response.data;
};

// Function to delete data
const deleteData = async (id) => {
  await axios.delete(`${API_BASE_URL}/vk/${id}`);
};

// Function to update data
const updateData = async (updatedEntry) => {
  await axios.put(`${API_BASE_URL}/vk/${updatedEntry.id}`, updatedEntry);
};

const ReadVKResistanceBaseLevels = () => {
  const queryClient = useQueryClient();
  const [showAllRecords, setShowAllRecords] = useState(false); // State to toggle between showing all records or latest two
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [formData, setFormData] = useState({
    index: '',
    r1: '',
    r2: '',
    base1: '',
    base2: '',
  });

  // Use React Query to fetch data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries(['data']);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      queryClient.invalidateQueries(['data']);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data: {error.message}</p>;

  // Sort data to get the latest records first by _id
  const sortedData = [...data].sort((a, b) => new Date(b._id) - new Date(a._id));

  // Determine the data to display based on showAllRecords state
  const recordsToDisplay = showAllRecords ? sortedData : sortedData.slice(0, 2);

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleEdit = (entry) => {
    setIsEditing(true);
    setCurrentEntry(entry);
    setFormData({
      index: entry.index,
      r1: entry.r1,
      r2: entry.r2,
      base1: entry.base1,
      base2: entry.base2,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ ...formData, id: currentEntry._id });
    setIsEditing(false);
    setCurrentEntry(null);
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Data List</h2>

      {/* Toggle button to switch between showing all records or only the latest two */}
      <button
        onClick={() => setShowAllRecords(!showAllRecords)}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {showAllRecords ? 'Show Latest Two Records' : 'Show All Records'}
      </button>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="mb-4">
          {/* Edit form fields */}
          <div className="flex flex-col mb-2">
            <label htmlFor="index" className="mb-1">Index:</label>
            <input
              id="index"
              type="text"
              name="index"
              value={formData.index}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* More fields */}
          <div className="flex flex-col mb-2">
            <label htmlFor="r1" className="mb-1">R1:</label>
            <input
              id="r1"
              type="text"
              name="r1"
              value={formData.r1}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="r2" className="mb-1">R2:</label>
            <input
              id="r2"
              type="text"
              name="r2"
              value={formData.r2}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="base1" className="mb-1">Base1:</label>
            <input
              id="base1"
              type="text"
              name="base1"
              value={formData.base1}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="base2" className="mb-1">Base2:</label>
            <input
              id="base2"
              type="text"
              name="base2"
              value={formData.base2}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update Entry
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recordsToDisplay.map((item) => (
            <div key={item._id} className="bg-white shadow-md p-4 rounded-lg border border-gray-300">
              <h3 className="font-bold mb-2">Index: {item.index}</h3>
              <p>R1: {item.r1}</p>
              <p>R2: {item.r2}</p>
              <p>Base1: {item.base1}</p>
              <p>Base2: {item.base2}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadVKResistanceBaseLevels;

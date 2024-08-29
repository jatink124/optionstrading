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
  const { data, isLoading, isError, error } = useQuery(['data'], fetchData);
  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      // Invalidate and refetch data after delete
      queryClient.invalidateQueries(['data']);
    },
  });

  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      // Invalidate and refetch data after update
      queryClient.invalidateQueries(['data']);
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [formData, setFormData] = useState({
    index: '',
    r1: '',
    r2: '',
    base1: '',
    base2: '',
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data: {error.message}</p>;

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
    updateMutation.mutate({ ...formData, id: currentEntry.id });
    setIsEditing(false);
    setCurrentEntry(null);
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Data List</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="mb-4">
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
        <table className="table-auto border border-collapse w-5/6 md:w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-2 py-2">Index</th>
              <th className="px-2 py-2">R1</th>
              <th className="px-2 py-2">R2</th>
              <th className="px-2 py-2">Base1</th>
              <th className="px-2 py-2">Base2</th>
              <th className="px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-2 py-2">{item.index}</td>
                <td className="px-2 py-2">{item.r1}</td>
                <td className="px-2 py-2">{item.r2}</td>
                <td className="px-2 py-2">{item.base1}</td>
                <td className="px-2 py-2">{item.base2}</td>
                <td className="px-2 py-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReadVKResistanceBaseLevels;

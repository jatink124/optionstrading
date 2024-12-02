import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import ReadVKResistanceBaseLevels from './ReadVKResistanceBaseLevels';

// Function to fetch data
const fetchEntries = async () => {
  const response = await axios.get('https://crud-2-6ptv.onrender.com/api/vk');
  return response.data;
};

// Function to add a new entry
const addEntry = async (newData) => {
  const response = await axios.post('https://crud-2-6ptv.onrender.com/api/vk', newData);
  return response.data;
};

const CreateComponent = () => {
  const [formData, setFormData] = useState({
    index: '',
    r1: '',
    r2: '',
    base1: '',
    base2: '',
    sequence: ''  // Add sequence to formData
  });
  const [error, setError] = useState('');
  const [nextSequence, setNextSequence] = useState(1); // State to hold the next sequence number
  const queryClient = useQueryClient();

  // Fetch existing entries
  const { data: entries, isLoading, isError } = useQuery({
    queryKey: ['data'],
    queryFn: fetchEntries,
    onSuccess: (data) => {
      // Calculate the next sequence number based on existing entries
      const maxSequence = data.reduce((max, entry) => Math.max(max, entry.sequence || 0), 0);
      setNextSequence(maxSequence + 1);
    }
  });

  // Mutation for adding a new entry
  const mutation = useMutation({
    mutationFn: (newData) => {
      // Include the next sequence number in the newData
      return addEntry({ ...newData, sequence: nextSequence });
    },
    onSuccess: () => {
      // Invalidate and refetch data
      queryClient.invalidateQueries({ queryKey: ['data'] });
      setFormData({
        index: '',
        r1: '',
        r2: '',
        base1: '',
        base2: '',
        sequence: '' // Reset sequence in formData
      });
      setNextSequence(prev => prev + 1); // Increment sequence number for next entry
    },
    onError: () => {
      setError('Failed to add entry. Please try again.');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    mutation.mutate(formData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {['index', 'r1', 'r2', 'base1', 'base2'].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={field} className="mb-1 capitalize">{field}:</label>
              <input
                id={field}
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-2 rounded-md col-span-2 hover:bg-blue-600 transition duration-200"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Processing...' : 'Add Entry'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <ReadVKResistanceBaseLevels />
    </div>
  );
};

export default CreateComponent;

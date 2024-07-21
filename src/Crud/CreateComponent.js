import React, { useState } from 'react';
import axios from 'axios';
import ReadVKResistanceBaseLevels from './ReadVKResistanceBaseLevels';

const CreateComponent = () => {
  const [formData, setFormData] = useState({
    index: '',
    r1: '',
    r2: '',
    base1: '',
    base2: ''
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

    axios.post('http://localhost:5000/data', formData)
      .then(response => {
        console.log('Data added:', response.data);
        setFormData({
          index: '',
          r1: '',
          r2: '',
          base1: '',
          base2: ''
        });
        setLoading(false);
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md col-span-2 hover:bg-blue-600 transition duration-200" disabled={loading}>
            {loading ? 'Processing...' : 'Add Entry'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <ReadVKResistanceBaseLevels />
    </div>
  );
};

export default CreateComponent;

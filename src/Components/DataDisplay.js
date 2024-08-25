import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    lessonsLearned: '',
    recommendations: ''
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('https://crud-2-6ptv.onrender.com/api/dailylearningentries');
      setEntries(response.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      setError('Failed to fetch entries. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (entry) => {
    setIsEditing(true);
    setCurrentEntry(entry);
    setFormData({
      date: entry.date.split('T')[0],  // Format date for input
      lessonsLearned: entry.lessonsLearned,
      recommendations: entry.recommendations
    });
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/dailylearningentries/${id}`);
      fetchEntries();  // Refresh the list after deletion
    } catch (error) {
      console.error('There was an error deleting the entry!', error);
      setError('Failed to delete entry. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/dailylearningentries/${currentEntry._id}`, formData);
      setIsEditing(false);
      setCurrentEntry(null);
      fetchEntries();  // Refresh the list after updating
    } catch (error) {
      console.error('There was an error updating the entry!', error);
      setError('Failed to update entry. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Entries</h2>
      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex flex-col mb-2">
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
          <div className="flex flex-col mb-2">
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
          <div className="flex flex-col mb-2">
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update Entry
          </button>
        </form>
      )}

      {entries.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Lessons Learned</th>
              <th className="py-2">Recommendations</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id} className="border-t">
                <td className="py-2">{new Date(entry.date).toLocaleDateString()}</td>
                <td className="py-2">{entry.lessonsLearned}</td>
                <td className="py-2">{entry.recommendations}</td>
                <td className="py-2 flex space-x-2">
                  <button
                    onClick={() => handleEditClick(entry)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(entry._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default DataDisplay;

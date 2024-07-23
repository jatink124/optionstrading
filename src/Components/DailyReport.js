import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailyReport = () => {
  const [formData, setFormData] = useState({
    date: '',
    lessonsLearned: '',
    recommendations: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [reportData, setReportData] = useState([]);

  // Function to fetch report data
  const fetchReportData = () => {
    axios.get('http://localhost:5000/repdata')
      .then(response => {
        setReportData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchReportData();
  }, []);

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

    axios.post('http://localhost:5000/repdata', formData)
      .then(response => {
        console.log('Data added:', response.data);
        setFormData({
          date: '',
          lessonsLearned: '',
          recommendations: ''
        });
        setLoading(false);
        // Fetch updated data after submission
        fetchReportData();
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

      <div className="container mx-auto mt-8">
  <h2 className="text-xl font-bold mb-4">Existing Entries</h2>
  {reportData.length > 0 ? (
    <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Date</th>
          <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Lessons Learned</th>
          <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Recommendations</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300">
        {reportData.map((entry, index) => (
          <tr key={index}>
            <td className="py-3 px-6 border-b border-gray-300">{entry.date}</td>
            <td className="py-3 px-6 border-b border-gray-300">{entry.lessonsLearned}</td>
            <td className="py-3 px-6 border-b border-gray-300">{entry.recommendations}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="mt-4">No entries available.</p>
  )}
</div>

    </div>
  );
};

export default DailyReport;

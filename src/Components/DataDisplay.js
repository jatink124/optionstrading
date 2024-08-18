import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/repdata');
      setEntries(response.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      setError('Failed to fetch entries. Please try again.');
    } finally {
      setLoading(false);
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
      {entries.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Lessons Learned</th>
              <th className="py-2">Recommendations</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id} className="border-t">
                <td className="py-2">{new Date(entry.date).toLocaleDateString()}</td>
                <td className="py-2">{entry.lessonsLearned}</td>
                <td className="py-2">{entry.recommendations}</td>
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

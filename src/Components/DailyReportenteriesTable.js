import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Function to parse the recommendations into an array of objects with title and description
const parseRecommendations = (text) => {
  if (!text) return [];
  const items = text.split('\n\n');
  return items.map((item) => {
    const parts = item.split(':');
    const title = parts[0]?.trim() || 'Unknown Title';
    const description = parts[1]?.trim() || 'No Description';
    return { title, description };
  });
};

// Fetch entries from the server
const fetchEntries = async () => {
  const response = await axios.get('https://crud-2-6ptv.onrender.com/api/dailylearningentries');
  return response.data;
};

// Update entry on the server
const updateEntry = async (updatedEntry) => {
  const response = await axios.put(`https://crud-2-6ptv.onrender.com/api/dailylearningentries/${updatedEntry._id}`, updatedEntry);
  return response.data;
};

// Delete entry from the server
const deleteEntry = async (id) => {
  await axios.delete(`https://crud-2-6ptv.onrender.com/api/dailylearningentries/${id}`);
};

const DailyReportEntriesTable = () => {
  const queryClient = useQueryClient();
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({});

  const { data: reportData, isLoading, isError, error } = useQuery({
    queryKey: ['entries'],
    queryFn: fetchEntries,
  });

  const updateMutation = useMutation({
    mutationFn: updateEntry,
    onSuccess: () => {
      queryClient.invalidateQueries(['entries']);
      setEditingEntry(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEntry,
    onSuccess: () => {
      queryClient.invalidateQueries(['entries']);
    },
  });

  const handleEditClick = (entry) => {
    setEditingEntry(entry._id);
    setFormData({ ...entry });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
      updateMutation.mutate(formData);
    } else {
      console.error('ID is required for updating entry');
    }
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Existing Entries</h2>
      {reportData.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Date</th>
              <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Lessons Learned</th>
              <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Recommendations</th>
              <th className="py-3 px-6 border-b border-gray-300 bg-gray-200 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {reportData.map((entry) => (
              <tr key={entry._id}>
                {editingEntry === entry._id ? (
                  <>
                    {/* Editable input fields when in edit mode */}
                    <td className="py-3 px-6 border-b border-gray-300">
                      <input
                        type="text"
                        name="date"
                        value={formData.date || ''}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      <textarea
                        name="lessonsLearned"
                        value={formData.lessonsLearned || ''}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1 resize-y"
                      />
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      <textarea
                        name="recommendations"
                        value={formData.recommendations || ''}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1 resize-y"
                      />
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      <button
                        className="text-green-500 hover:text-green-700 mr-2"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setEditingEntry(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {/* Normal display when not in edit mode */}
                    <td className="py-3 px-6 border-b border-gray-300">{entry.date}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{entry.lessonsLearned}</td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      {parseRecommendations(entry.recommendations).map((rec, idx) => (
                        <div key={idx} className="mb-2">
                          <p className="font-semibold text-gray-800">{rec.title}</p>
                          <p className="text-gray-700">{rec.description}</p>
                        </div>
                      ))}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEditClick(entry)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(entry._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4">No entries available.</p>
      )}
    </div>
  );
};

export default DailyReportEntriesTable;

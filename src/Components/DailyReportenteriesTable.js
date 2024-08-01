// src/components/EntriesTable.js
import React from 'react';

// Function to parse the recommendations into an array of objects with title and description
const parseRecommendations = (text) => {
  // Split the recommendations string by double new lines to separate each item
  const items = text.split('\n\n');
  
  return items.map(item => {
    // Split each item by the first colon to separate title and description
    const parts = item.split(':');
    const title = parts[0]?.trim() || 'Unknown Title';
    const description = parts[1]?.trim() || 'No Description';

    return {
      title,
      description
    };
  });
};

const DailyReportEntriesTable = ({ reportData }) => {
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {reportData.map((entry, index) => (
              <tr key={index}>
                <td className="py-3 px-6 border-b border-gray-300">{entry.date}</td>
                <td className="py-3 px-6 border-b border-gray-300">{entry.lessonsLearned}</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  {parseRecommendations(entry.recommendations).map((rec, idx) => (
                    <div key={idx} className="mb-2">
                      <p className="font-semibold text-gray-800">{rec.title}:</p>
                      <p className="text-gray-700">{rec.description}</p>
                    </div>
                  ))}
                </td>
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

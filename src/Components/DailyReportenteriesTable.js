// EntriesTable.js
import React from 'react';

const DailyReportenteriesTable = ({ reportData }) => {
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
                <td className="py-3 px-6 border-b border-gray-300">{entry.recommendations}</td>
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

export default DailyReportenteriesTable;

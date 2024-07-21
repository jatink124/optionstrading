import React, { useState } from 'react';

const VkLevelsTable = ({ data }) => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <button
        onClick={toggleTable}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {showTable ? 'Hide Table' : 'Show Table'}
      </button>
      {showTable && (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-300">Index</th>
                <th className="px-4 py-2 border-b border-gray-300">R1 Levels</th>
                <th className="px-4 py-2 border-b border-gray-300">R2 Levels</th>
                <th className="px-4 py-2 border-b border-gray-300">Base Level 1</th>
                <th className="px-4 py-2 border-b border-gray-300">Base Level 2</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b border-gray-300">{item.index}</td>
                  <td className="px-4 py-2 border-b border-gray-300">{item.r1}</td>
                  <td className="px-4 py-2 border-b border-gray-300">{item.r2}</td>
                  <td className="px-4 py-2 border-b border-gray-300">{item.base1}</td>
                  <td className="px-4 py-2 border-b border-gray-300">{item.base2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VkLevelsTable;

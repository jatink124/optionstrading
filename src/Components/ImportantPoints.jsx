import React, { useState } from 'react';

function ImportantPoints() {
  const [date, setDate] = useState(new Date());

  // Optionally, format the date as needed
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      <div className="mt-4">
        <h6>Current Date: {formattedDate}</h6>
        {/* <h4>Huge Downtrend Expected</h4> */}
      </div>

      {/* Table section */}
      <div className="mt-4">
        <h2>Important Points</h2>
        <table className="table-auto border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-600 px-4 py-2">Trade Analyst Name</th>
              <th className="border border-gray-600 px-4 py-2">Nifty</th>
              <th className="border border-gray-600 px-4 py-2">Bank Nifty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 px-4 py-2">Pakash Gaba</td>
              <td className="border border-gray-600 px-4 py-2">if 24800 breaks then 24600 is the next good support.</td>
              <td className="border border-gray-600 px-4 py-2">51100 is the strong support</td>
            </tr>
            {/* <tr>
              <td className="border border-gray-600 px-4 py-2">2</td>
              <td className="border border-gray-600 px-4 py-2">Trading Strategy</td>
              <td className="border border-gray-600 px-4 py-2">Developing effective trading strategies</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2">3</td>
              <td className="border border-gray-600 px-4 py-2">Risk Management</td>
              <td className="border border-gray-600 px-4 py-2">Strategies to manage trading risks</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ImportantPoints;

import React, { useState } from 'react';

function TradingChecklist() {


  return (
    <div className="instructions mt-4 w-1/2 md:w-1/3 lg:w-1/3 mx-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b border-gray-300 text-left font-medium text-base">
            Step
          </th>
          <th className="px-4 py-2 border-b border-gray-300 text-left font-medium text-base">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border-b border-gray-300 text-left text-xl">
            1
          </td>
          <td className="px-4 py-2 border-b border-gray-300 text-left text-xl font-sans">
            Check PDH, PDL and 10-21 EMA (First Hour and Last Hour)
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 border-b border-gray-300 text-left text-xl font-sans">
            2
          </td>
          <td className="px-4 py-2 border-b border-gray-300 text-left text-xl font-sans">
            Reduce Loss - Take 6 Trades with 2X6 strategy:
            <ul className="list-disc pl-4">
              <li className="text-xl">2 in between 9:15-10:30</li>
              <li className="text-xl">2 after 12:00pm</li>
              <li className="text-xl">2 after 2:00pm</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  );
}

export default TradingChecklist;

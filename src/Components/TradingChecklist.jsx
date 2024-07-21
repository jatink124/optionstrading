import React, { useState } from 'react';

function TradingChecklist() {


  return (
    <div>
     
        <div className="instructions mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-300">Step</th>
                <th className="px-4 py-2 border-b border-gray-300">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300">1</td>
                <td className="px-4 py-2 border-b border-gray-300">Check PDH, PDL and 10-21 EMA (First Hour and Last Hour)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300">2</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Reduce Loss - Take 6 Trades with 2X6 strategy:
                  <ul className="list-disc list-inside">
                    <li>2 in between 9:15-10:30</li>
                    <li>2 after 12:00pm</li>
                    <li>2 after 2:00pm</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    
    </div>
  );
}

export default TradingChecklist;

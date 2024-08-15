import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="flex justify-end space-x-4 bg-gray-200 p-4">
      {/* <Link
        to="/admin/"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Dashboard
      </Link>
      <Link
        to="/admin/users"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Users
      </Link> */}
      <Link
        to="/"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
   Home
      </Link>
      <Link
        to="/admin/tradingjournal"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
      Trading Journal
      </Link>
      {/* <Link
        to="/admin/otreport"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
      Daily OT Report
      </Link> */}
      <Link
        to="/dailylearningentries"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
      Daily Learning
      </Link>
      <Link
        to="/admin/createcomponent"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Create VK Levels
      </Link>
      <Link
        to="/admin/entertradepredicitons"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
       Enter Trade Predictions
      </Link>
      <Link
        to="/admin/tradersdiary"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
     Traders Diary
      </Link>
      <Link
        to="/admin/multi-select"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
     Intraday Prediction
      </Link>
      <Link
        to="/admin/strategytable"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >Strategy Table</Link>
      <Link
        to="/admin/websitelist"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
          
     Website List
      </Link>
    </nav>
  );
}

export default AdminNavbar;

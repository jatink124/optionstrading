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
      <Link
        to="/admin/otreport"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
      Daily OT Report
      </Link>
      <Link
        to="/admin/createcomponent"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Create VK Levels
      </Link>
    </nav>
  );
}

export default AdminNavbar;

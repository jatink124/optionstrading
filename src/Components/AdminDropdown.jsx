import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="flex justify-end space-x-4 bg-gray-200 p-4">
      <Link
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
      </Link>
      <Link
        to="/admin/settings"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Settings
      </Link>
      <Link
        to="/admin/createcomponent"
        className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        Create Component
      </Link>
    </nav>
  );
}

export default AdminNavbar;

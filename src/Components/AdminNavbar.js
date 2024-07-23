// src/Components/Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link className="text-xl font-semibold text-gray-700" to="/">
          Navbar
        </Link>
        <button
          className="block lg:hidden p-2 text-gray-700 focus:outline-none"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            document.getElementById('navbarNav').classList.toggle('hidden');
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            
            <li className="nav-item">
            <Link className="text-gray-700 hover:text-gray-900" to="/adddataform">
               Add Data Form
              </Link>
              <Link className="text-gray-700 hover:text-gray-900" to="admin/createcomponent">
             Create VK Levels
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

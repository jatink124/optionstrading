import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Link */}
        <Link to="/" className="flex items-center">
          <img
            src="/otlogo.png"
            alt="Navbar Logo"
            className="h-20 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
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

        {/* Navbar Links */}
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {/* Other links */}
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/">
                Home
              </Link>
            </li>

      

            {/* Other links */}
            <li className="nav-item">
              <Link
                className="text-gray-700 hover:text-gray-900 hover:no-underline"
                to="/lessonslearnt"
              >
                Lessons Learnt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-gray-700 hover:text-gray-900 hover:no-underline"
                to="/tutorials"
              >
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-gray-700 hover:text-gray-900 hover:no-underline"
                to="/papertrading"
              >
                Paper Trading
              </Link>
            </li>
                  {/* Dropdown Menu */}
                  <li className="relative group">
              <button
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center"
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.707-4.06a.75.75 0 111.086 1.036l-4.25 4.647a.75.75 0 01-1.086 0l-4.25-4.647a.75.75 0 01.02-1.086z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg z-50">
                <li>
                  <Link
                    to="/readstrategy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Read Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tradersdiary"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Traders Diary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tradetable"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                   Trade Table
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketpredictioninsights"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Market Prediction Insights
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="text-gray-700 hover:text-gray-900 hover:no-underline"
                to="/admin"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src="/otlogo.png" alt="Navbar Logo" className="h-20 w-auto" />
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
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/tradingchecklist">
                Trading CheckList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/vklevels">
                Check VK levels
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tradersdiary"
                className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:no-underline"
              >
                Traders Diary
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/marketpredictioninsights">
                Market Prediction Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/lessonslearnt">
                Lessons Learnt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/tutorials">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/readstrategy">
                Read Strategy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/admin">
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

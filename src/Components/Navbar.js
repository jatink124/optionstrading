import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
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
            <li className="nav-item">
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/readstrategy">
                Read Strategy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-gray-700 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:no-underline" to="/tradersdiary">
                Traders Diary
              </Link>
            </li>

            {/* Calculator Icon Link */}
            <li className="nav-item">
              <Link to="/optionstradingcalculator" className="flex items-center text-gray-700 hover:text-gray-900 hover:no-underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2" // Adjust size
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 12h18M3 16h18M7 20h10" />
                </svg>
                Calculator
              </Link>
            </li>

            {/* Other links */}
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
              <Link className="text-gray-700 hover:text-gray-900 hover:no-underline" to="/papertrading">
                Paper Trading
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

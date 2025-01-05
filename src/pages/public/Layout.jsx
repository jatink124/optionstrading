// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl bg-opacity-75 bg-black rounded-xl p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

import PublicRoutes from './Components/PublicRoutes';
import AdminRoutes from './Components/AdminRoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/*" element={<AdminRoutes />} />
            {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

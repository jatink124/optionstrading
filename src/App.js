import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'; // Ensure you have Tailwind CSS or other CSS framework imported
import Navbar from './Components/Navbar'; // Adjust the import path if necessary

import AdminDropdown from './Components/AdminDropdown'; // New import for dropdown
import ShowHide from './Components/TradingChecklist'; // Adjust the import path if necessary
import RiskReward from './Components/RiskReward';
import MultiSelectDropdown from './Components/MultiSelectDropdown';
import Tradingjournal from './Components/Tradingjournal';
import ProfitLossDisplay from './Components/ProfitLossDisplay';
import { data } from './Components/data';
import LevelsTable from './Components/VkLevelsTable';
import ImportantPoints from './Components/ImportantPoints';
import LiveValue from './Components/LiveValue';
import AddDataForm from './Components/AddDataForm';
import CreateComponent from './Crud/CreateComponent';
import Mhome from './Components/Mhome';
import ReadComponent from './Crud/ReadVKResistanceBaseLevels';
import TradingChecklist from './Components/TradingChecklist';
import VkLevelsTable from './Components/VkLevelsTable';
import ReadVKResistanceBaseLevels from './Crud/ReadVKResistanceBaseLevels';
import DailyReport from './Components/DailyReport';
import TradersDiary from './Components/TradersDiary';
// import AdminDashboard from './Pages/AdminDashboard'; // Admin pages
// import AdminUsers from './Pages/AdminUsers';
// import AdminSettings from './Pages/AdminSettings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <ProfitLossDisplay />
                  <Routes>
                    <Route path="/" element={<Mhome />} />
                    <Route path="/risk-reward" element={<RiskReward />} />
                   
                   
                    {/* <Route path="/createcomponent" element={<CreateComponent />} /> */}
                    <Route path="/tradingchecklist" element={<TradingChecklist />} />
                    <Route path="/vklevels" element={<ReadVKResistanceBaseLevels />} />
                    <Route path="/marketpredictioninsights" element={<ImportantPoints />} />
                    {/* Add more routes for different pages */}
                  </Routes>
                </>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <>
              
                  <AdminDropdown /> {/* Dropdown added here */}
                  <Routes>
                    {/* <Route path="/" element={<AdminDashboard />} />
                    <Route path="/users" element={<AdminUsers />} />*/}
                    <Route path="/otreport" element={<DailyReport/>} /> 
                    <Route path="/createcomponent" element={<CreateComponent />} />
                    <Route path="/tradingjournal" element={<Tradingjournal />} />
                    <Route path="/tradersdiary" element={<TradersDiary />} />
                    <Route path="/multi-select" element={<MultiSelectDropdown />} />
                    {/* Add more admin routes as needed */}
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

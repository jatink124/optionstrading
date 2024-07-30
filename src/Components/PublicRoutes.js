// src/routes/PublicRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProfitLossDisplay from './ProfitLossDisplay';
import Mhome from './Mhome';
import RiskReward from './RiskReward';
import TradingChecklist from './TradingChecklist';
import ReadVKResistanceBaseLevels from '../Crud/ReadVKResistanceBaseLevels';
import ImportantPoints from './ImportantPoints';
import DailyReport from './DailyReport';

const PublicRoutes = () => (
  <>
    <Navbar />
    <ProfitLossDisplay />
    <Routes>
      <Route path="/" element={<Mhome />} />
      <Route path="/risk-reward" element={<RiskReward />} />
      <Route path="/tradingchecklist" element={<TradingChecklist />} />
      <Route path="/vklevels" element={<ReadVKResistanceBaseLevels />} />
      <Route path="/marketpredictioninsights" element={<ImportantPoints />} />
      <Route path="/lessonslearnt" element={<DailyReport/>} />
      {/* Add more routes as needed */}
    </Routes>
  </>
);

export default PublicRoutes;

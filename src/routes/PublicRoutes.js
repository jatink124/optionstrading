// src/routes/PublicRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProfitLossDisplay from './ProfitLossDisplay';
import Mhome from '../pages/public/Mhome';
import RiskReward from '../pages/public/RiskReward';
import TradingChecklist from '../pages/public/TradingChecklist';
import ReadVKResistanceBaseLevels from '../pages/public/ReadVKResistanceBaseLevels';
import ImportantPoints from '../pages/public/ImportantPoints';
import DailyReport from '../pages/public/DailyReport';
import Tutorials from '../pages/public/Tutotrials';

import TradersDiary from '../pages/public/TradersDiary';
import ReadStrategy from '../pages/public/ReadStrategy';
import Papertrading from '../pages/public/Papertrading';
import Learntabs from '../pages/public/Learntabs';
import OptionsTradingCalculatorApp from '../pages/public/OptionsTradingCalculatorApp';
import OptionsPerformanceTracker from '../pages/public/OptionsPerformanceTracker';

import OptionTradingStrategy from '../pages/public/OptionsTradingStrategy';


import TradeTable from '../pages/public/TradeTable';
import Navbar from './Navbar';
import MorningTradingPlan from '../pages/public/MorningTradingPlan';
const PublicRoutes = () => (
  <>
    <Navbar/>
    {/* <ProfitLossDisplay /> */}
    <Routes>
      <Route path="/" element={<Mhome />} />
      <Route path="/risk-reward" element={<RiskReward />} />
      <Route path="/learn" element={<Learntabs/>} />
      <Route path="/tradingchecklist" element={<TradingChecklist />} />
      <Route path="/vklevels" element={<ReadVKResistanceBaseLevels />} />
      <Route path="/marketpredictioninsights" element={<ImportantPoints />} />
      <Route path="/lessonslearnt" element={<DailyReport/>} />
      <Route path="/tutorials" element={<Tutorials/>} />
    <Route path="/readstrategy" element={<ReadStrategy/>} />
    {/* <Route path="/tradersdiary" element={<TradersDiary />} /> */}
    <Route path="/papertrading" element={<Papertrading/>} />
    <Route path="/optionstradingcalculator" element={<OptionsTradingCalculatorApp/>} />
    <Route path="/optionsperformancetracker" element={<OptionsPerformanceTracker/>} />
    <Route path="/ots" element={<OptionTradingStrategy/>} />
    {/* <Route path="/tradetable" element={<TradeTable/>} /> */}
    <Route path="/tradingplandata" element={<MorningTradingPlan/>} />
      {/* Add more routes as needed */}
    </Routes>
  </>
);

export default PublicRoutes;

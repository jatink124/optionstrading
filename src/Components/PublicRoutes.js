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
import Tutorials from './Tutotrials';
import StrategyTable from './StrategyTable';
import TradersDiary from './TradersDiary';
import ReadStrategy from './ReadStrategy';
import Papertrading from './Papertrading';
import Learntabs from './Learntabs';
import OptionsTradingCalculatorApp from './OptionsTradingCalculatorApp';
import OptionsPerformanceTracker from './OptionsPerformanceTracker';
import Ledger from './dhan/Ledger';
import OptionTradingStrategy from './OptionsTradingStrategy';
const PublicRoutes = () => (
  <>
    <Navbar />
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
    <Route path="/tradersdiary" element={<TradersDiary />} />
    <Route path="/papertrading" element={<Papertrading/>} />
    <Route path="/optionstradingcalculator" element={<OptionsTradingCalculatorApp/>} />
    <Route path="/optionsperformancetracker" element={<OptionsPerformanceTracker/>} />
    <Route path="/ots" element={<OptionTradingStrategy/>} />
      {/* Add more routes as needed */}
    </Routes>
  </>
);

export default PublicRoutes;

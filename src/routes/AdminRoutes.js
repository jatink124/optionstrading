// src/routes/AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDropdown from './AdminDropdown';
import DailyReport from '../pages/public/DailyReport';
import CreateComponent from '../pages/admin/CreateComponent';
import Tradingjournal from '../pages/admin/Tradingjournal';
import TradersDiary from '../pages/public/TradersDiary';
import MultiSelectDropdown from '../pages/admin/MultiSelectDropdown';

import DailyReportenteriesTable from '../pages/admin/DailyReportenteriesTable';
import DailyLearningEntries from '../pages/admin/DailyLearningEntries';
import DailyReportsubmit from '../pages/admin/DailyReportsubmit';
import EnterTradePredictions from '../pages/admin/EnterTradePredictions';
import StrategyTable from '../pages/admin/StrategyTable';
import WebsiteList from '../pages/public/utils/WebsiteList';
import { websites } from '../pages/public/utils/websitesData';  // Ensure this path is correct
import Addchecklist from '../pages/admin/Addchecklist';
const AdminRoutes = () => (
  <>
    <AdminDropdown />
    <Routes>
      {/* <Route path="/otreport" element={<DailyReportsubmit />} /> */}
      <Route path="/createcomponent" element={<CreateComponent />} />
      <Route path="/tradingjournal" element={<Tradingjournal />} />
      <Route path="/tradersdiary" element={<TradersDiary />} />
      <Route path="/multi-select" element={<MultiSelectDropdown />} />
      <Route path="/dailylearningentries" element={<DailyLearningEntries/>} />
      <Route path="/entertradepredicitons" element={<EnterTradePredictions/>} />
      <Route path="/strategytable" element={<StrategyTable/>} />
      <Route path="/websitelist" element={<WebsiteList websites={websites} />} />
      <Route path="/Addchecklist" element={<Addchecklist/>} />
    </Routes>
  </>
);

export default AdminRoutes;

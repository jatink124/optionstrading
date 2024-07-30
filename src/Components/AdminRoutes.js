// src/routes/AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDropdown from './AdminDropdown';
import DailyReport from './DailyReport';
import CreateComponent from '../Crud/CreateComponent';
import Tradingjournal from './Tradingjournal';
import TradersDiary from './TradersDiary';
import MultiSelectDropdown from './MultiSelectDropdown';

import DailyReportenteriesTable from './DailyReportenteriesTable';
import DailyLearningEntries from './DailyLearningEntries';

const AdminRoutes = () => (
  <>
    <AdminDropdown />
    <Routes>
      <Route path="/otreport" element={<DailyReport />} />
      <Route path="/createcomponent" element={<CreateComponent />} />
      <Route path="/tradingjournal" element={<Tradingjournal />} />
      <Route path="/tradersdiary" element={<TradersDiary />} />
      <Route path="/multi-select" element={<MultiSelectDropdown />} />
      <Route path="/dailylearningentries" element={<DailyLearningEntries/>} />
    </Routes>
  </>
);

export default AdminRoutes;

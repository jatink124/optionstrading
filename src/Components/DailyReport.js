// DailyReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EntriesTable from './DailyReportenteriesTable';

const DailyReport = () => {
  const [reportData, setReportData] = useState([]);

  const fetchReportData = () => {
    axios.get('https://verdant-daffodil-6da433.netlify.app/dailyreportdata')
      .then(response => {
        setReportData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  return (
    <div>
  
      <EntriesTable reportData={reportData} />
    </div>
  );
};

export default DailyReport;

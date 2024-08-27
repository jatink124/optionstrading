// DailyReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DataEntryForm from './DataEntryForm';

const DailyReportsubmit = () => {
  const [reportData, setReportData] = useState([]);

  const fetchReportData = () => {
    axios.get('http://localhost:5000/repdata')
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
  
      <DataEntryForm onEntryAdded={fetchReportData} />
    </div>
  );
};

export default DailyReportsubmit;

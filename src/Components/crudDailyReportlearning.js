// DailyReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EntriesTable from './DailyReportenteriesTable';

const crudDailyReportlearning = () => {
  const [reportData, setReportData] = useState([]);
  // const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fetchReportData = () => {
    // axios.get('https://crud1-xoqf.onrender.com/repdata')
    axios.get('https://crud-2-6ptv.onrender.com/api/dailylearningentries')
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

export default crudDailyReportlearning;

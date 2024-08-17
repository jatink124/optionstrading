import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DailyReportenteriesTable from './DailyReportenteriesTable';
import DataEntryForm from './DataEntryForm';


const DailyLearningEntries = () => {
  const [reportData, setReportData] = useState([]);

  // Function to fetch report data
  const fetchReportData = () => {
    axios.get('https://crud1-xoqf.onrender.com/repdata')
      .then(response => {
        setReportData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchReportData();
  }, []);

  return (
    <div>
      <DataEntryForm onEntryAdded={fetchReportData} />
 
    </div>
  );
};

export default DailyLearningEntries;

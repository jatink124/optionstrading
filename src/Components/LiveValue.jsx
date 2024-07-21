import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LiveValue() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:5000/api/scrape')
        .then(response => {
          console.log('Fetched value:', response.data.value); // Debug log
          setValue(response.data.value);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();

    const interval = setInterval(fetchData, 100);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    axios.post('http://localhost:5000/api/refresh')
      .then(response => {
        console.log('Refreshed value:', response.data.value); // Debug log
        setValue(response.data.value);
      })
      .catch(error => {
        console.error('Error refreshing data:', error);
      });
  };

  return (
    <div>
      <h2>Live BankNifty Value</h2>
      {value ? <p>{value}</p> : <p>Loading...</p>}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default LiveValue;

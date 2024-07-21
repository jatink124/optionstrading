import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/php-react-admin/selectoptionsdata.php');
        setData(response.data.users || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ border: '1px solid #ddd', background: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>DateTime</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Index</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Put</th> 
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Call</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>pdh</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>closetoresistance</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>closetobase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Overall Trend</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Intraday Trend</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Above VWAP</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Index Strong/Weak</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Market_Opening</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>PreviousDayEMAhappens</th>
          
            {/* Add more table headings for other columns */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #ddd' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.datetime}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.indextrade}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.put}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.call}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.pdh}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.closetoresistance}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.closetobase}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.overalltrend}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.intradaytrend}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.abovevwap}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.indexstrongweak}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.marketopening}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.previousdayemahappens}</td>
         
              {/* Add more table cells for other columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

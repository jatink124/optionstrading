import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTradingJournalData = async () => {
  const response = await axios.get('http://localhost/php-react-admin/selecttradingjournal.php');
  return response.data.users || [];
};

const Tradingjournaltable = () => {
  const { data, isLoading, isError, refetch } = useQuery('tradingJournalData', fetchTradingJournalData, {
    refetchInterval: 5000, // Refetch the data every 5 seconds (5000 milliseconds)
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data: {isError.message}</p>;

  const tableHeadings = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div>
      <h2>Data Table</h2>
      <button onClick={() => refetch()}>Refresh Data</button>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ border: '1px solid #ddd', background: '#f2f2f2' }}>
            {tableHeadings.map((heading, index) => (
              <th key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} style={{ border: '1px solid #ddd' }}>
              {tableHeadings.map((heading, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {item[heading]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tradingjournaltable;

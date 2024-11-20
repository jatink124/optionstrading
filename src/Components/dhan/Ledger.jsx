import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchLedgerData = async () => {
  const response = await axios.get('https://api.dhan.co', {
    headers: {
      Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzMyMTc4NTI3LCJ0b2tlbkNvbnN1bWVyVHlwZSI6IlNFTEYiLCJ3ZWJob29rVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiZGhhbkNsaWVudElkIjoiMTEwMDU4OTczOSJ9.FwC91J0pnWjR-qQfKFMV44Hc18PGZqzxC3fBhDDgKJLTzayQVQjtITHoiuXJ7Ptu-7y0BnB-Lw08RI9y6TzKIQeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzMyMTc4NTI3LCJ0b2tlbkNvbnN1bWVyVHlwZSI6IlNFTEYiLCJ3ZWJob29rVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiZGhhbkNsaWVudElkIjoiMTEwMDU4OTczOSJ9.FwC91J0pnWjR-qQfKFMV44Hc18PGZqzxC3fBhDDgKJLTzayQVQjtITHoiuXJ7Ptu-7y0BnB-Lw08RI9y6TzKIQ`,
    },
  });
  
  
  return response.data;
};

const Ledger = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ledger'],
    queryFn: fetchLedgerData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching ledger data</p>;

  return (
    <div>
      <h1>Ledger Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Ledger;

import API_BASE_URL from './config';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch data
const fetchData = async () => {
  const response = await axios.get(`${API_BASE_URL}/vk`);
  return response.data;
};

const ReadVKResistanceBaseLevels = () => {
  // Use React Query to fetch data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
    // Optionally, you can add refetchInterval to automatically refresh data at a given interval
    // refetchInterval: 60000 // refetch every 60 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Data List</h2>
      <table className="table-auto border border-collapse w-5/6 md:w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-2 py-2">Index</th>
            <th className="px-2 py-2">R1</th>
            <th className="px-2 py-2">R2</th>
            <th className="px-2 py-2">Base1</th>
            <th className="px-2 py-2">Base2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-2 py-2">{item.index}</td>
              <td className="px-2 py-2">{item.r1}</td>
              <td className="px-2 py-2">{item.r2}</td>
              <td className="px-2 py-2">{item.base1}</td>
              <td className="px-2 py-2">{item.base2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadVKResistanceBaseLevels;

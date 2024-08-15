import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReadVKResistanceBaseLevels = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crud1-xoqf.onrender.com/data');
        // const response = await axios.get('http://localhost:5000/data');
        setData(response.data);
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

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

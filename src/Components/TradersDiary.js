import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import ReadTradersDiary from './ReadTradersDiary';

const fetchEntries = async () => {
  const response = await axios.get('http://localhost:5000/tradersdiary');
  return response.data;
};

const postEntry = async (entry) => {
  await axios.post('http://localhost:5000/tradersdiary', entry);
};

const TradersDiary = () => {
  const [formData, setFormData] = useState({
    tradeDay: '',
    numberOfTrades: '',
    overallPL: '',
    netPL: '',
    status: ''
  });

  const queryClient = useQueryClient();
  const { data: entries, isLoading, isError, error } = useQuery({
    queryKey: ['entries'],
    queryFn: fetchEntries
  });

  const mutation = useMutation({
    mutationFn: postEntry,
    onSuccess: () => {
      queryClient.invalidateQueries(['entries']);
      setFormData({
        tradeDay: '',
        numberOfTrades: '',
        overallPL: '',
        netPL: '',
        status: ''
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  const chartData = entries.map(entry => ({
    tradeDay: entry.tradeDay,
    overallPL: parseFloat(entry.overallPL),
    netPL: parseFloat(entry.netPL),
    numberOfTrades: parseInt(entry.numberOfTrades, 10)
  }));

  const pieData = [
    { name: 'Overall P&L', value: chartData.reduce((sum, entry) => sum + entry.overallPL, 0) },
    { name: 'Net P&L', value: chartData.reduce((sum, entry) => sum + entry.netPL, 0) }
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="tradeDay" className="mb-1">Trade Day:</label>
            <input
              id="tradeDay"
              type="date"
              name="tradeDay"
              value={formData.tradeDay}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="numberOfTrades" className="mb-1">Number of Trades:</label>
            <input
              id="numberOfTrades"
              type="text"
              name="numberOfTrades"
              value={formData.numberOfTrades}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="overallPL" className="mb-1">Overall P&L:</label>
            <input
              id="overallPL"
              type="text"
              name="overallPL"
              value={formData.overallPL}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="netPL" className="mb-1">Net P&L:</label>
            <input
              id="netPL"
              type="text"
              name="netPL"
              value={formData.netPL}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-1">Status:</label>
            <input
              id="status"
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded-md col-span-2 hover:bg-blue-600 transition duration-200" disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Processing...' : 'Add Entry'}
          </button>
        </form>
        {mutation.isError && <p className="text-red-500 mt-2">{mutation.error.message}</p>}
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Performance Charts</h2>
        <p className="mb-4">The charts below compare the Overall P&L, Net P&L, and Number of Trades for each trade day.</p>
        
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tradeDay" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="overallPL" stroke="#8884d8" name="Overall P&L" />
            <Line type="monotone" dataKey="netPL" stroke="#82ca9d" name="Net P&L" />
            <Line type="monotone" dataKey="numberOfTrades" stroke="#ff7300" name="Number of Trades" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400} className="mt-8">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tradeDay" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="overallPL" fill="#8884d8" name="Overall P&L" />
            <Bar dataKey="netPL" fill="#82ca9d" name="Net P&L" />
            <Bar dataKey="numberOfTrades" fill="#ff7300" name="Number of Trades" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400} className="mt-8">
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ReadTradersDiary />
    </div>
  );
};

export default TradersDiary;

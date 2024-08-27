const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');   

const strategyRouter = require('./routes/strategy');
const predictionsRoutes = require('./predictionroutes');
const tradingJournalRoutes = require('./routes/tradingjournal');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from specific origins
const allowedOrigins = ['https://optionstrading.netlify.app','http://localhost:3000'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.use(bodyParser.json());

// Mount API routes
app.use('/api', strategyRouter);
app.use('/api', predictionsRoutes);
app.use('/api', tradingJournalRoutes); // Use routes with a base path

// File paths for data storage
const dataFilePath = path.join(__dirname, 'data.json');
const reportFilePath = path.join(__dirname, 'dailyreportdata.json');
const diaryFilePath = path.join(__dirname, 'tradersdiary.json');

// Helper functions to read and write data
const readFile = (filePath) => JSON.parse(fs.readFileSync(filePath));
const writeFile = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// API endpoints

// Get all data
app.get('/data', (req, res) => {
  const data = readFile(dataFilePath);
  res.json(data);
});

app.post('/data', (req, res) => {
  const data = readFile(dataFilePath);
  const newItem = req.body;

  // If there are already 2 records, clear the array
  if (data.length >= 2) {
    data.splice(0, 2);  // Remove the first two records
  }

  // Add the new record
  data.push(newItem);
  writeFile(dataFilePath, data);

  res.status(201).json(newItem);
});

// Get all report data
app.get('/repdata', (req, res) => {
  const data = readFile(reportFilePath);
  res.json(data);
});

// Create a new report
app.post('/repdata', (req, res) => {
  const data = readFile(reportFilePath);
  const newItem = req.body;
  data.push(newItem);
  writeFile(reportFilePath, data);
  res.status(201).json(newItem);
});

// Get all trader diary entries
app.get('/tradersdiary', (req, res) => {
  const data = readFile(diaryFilePath);
  res.json(data);
});

// Create a new trader diary entry
app.post('/tradersdiary', (req, res) => {
  const data = readFile(diaryFilePath);
  const newItem = req.body;
  const lastIndex = data.length > 0 ? data[data.length - 1].index : 0;
  newItem.index = lastIndex + 1;
  data.push(newItem);
  writeFile(diaryFilePath, data);
  res.status(201).json(newItem);
});

// Get the last index of trader diary entries
app.get('/tradersdiary/lastIndex', (req, res) => {
  const data = readFile(diaryFilePath);
  if (data.length === 0) {
    res.status(404).json({ message: 'No entries found' });
  } else {
    const lastIndex = data[data.length - 1].index;
    res.json({ index: lastIndex });
  }
});

// Update a trader diary entry
app.put('/tradersdiary/:index', (req, res) => {
  const data = readFile(diaryFilePath);
  const { index } = req.params;
  const updatedEntry = req.body;
  const itemIndex = data.findIndex(item => item.index === parseInt(index));
  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...updatedEntry };
    writeFile(diaryFilePath, data);
    res.json(data[itemIndex]);
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

// Delete a trader diary entry
app.delete('/tradersdiary/:index', (req, res) => {
  const data = readFile(diaryFilePath);
  const { index } = req.params;
  const newData = data.filter(item => item.index !== parseInt(index));
  writeFile(diaryFilePath, newData);
  res.status(204).send();
});

// Update data
app.put('/data/:index', (req, res) => {
  const data = readFile(dataFilePath);
  const { index } = req.params;
  const itemIndex = data.findIndex(item => item.index === parseInt(index));
  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...req.body };
    writeFile(dataFilePath, data);
    res.json(data[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete data
app.delete('/data/:index', (req, res) => {
  const data = readFile(dataFilePath);
  const { index } = req.params;
  const newData = data.filter(item => item.index !== parseInt(index));
  writeFile(dataFilePath, newData);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

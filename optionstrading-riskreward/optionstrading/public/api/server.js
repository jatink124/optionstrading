const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const strategyRouter = require('./routes/strategy');
const predictionsRoutes = require('./predictionroutes');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://optionstrading.netlify.app', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',  // Allow these HTTP methods
  allowedHeaders: 'Content-Type,Authorization' // Allow these headers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api', strategyRouter);
app.use('/api', predictionsRoutes);
const repFilePath = path.join(__dirname, 'dailyreportdata.json');
// Helper function to read data from file
const readData = (filePath) => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper function to write data to file
const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// CRUD operations

app.get('/data', (req, res) => {
  const data = readData(filePath);
  res.json(data);
});

app.get('/repdata', (req, res) => {
  const data = readData(repFilePath);
  res.json(data);
});

app.post('/repdata', (req, res) => {
  const data = readData(repFilePath);
  const newItem = req.body;

  data.push(newItem);
  writeData(repFilePath, data);

  res.status(201).json(newItem);
});

app.get('/tradersdiary', (req, res) => {
  const data = readData(tradersdiaryPath);
  res.json(data);
});

app.post('/tradersdiary', (req, res) => {
  const data = readData(tradersdiaryPath);
  const newItem = req.body;

  data.forEach(item => {
    item.index = parseInt(item.index);
  });

  const lastIndex = data.length > 0 ? data[data.length - 1].index : 0;
  newItem.index = lastIndex + 1;

  data.push(newItem);
  writeData(tradersdiaryPath, data);

  res.status(201).json(newItem);
});

app.get('/tradersdiary/lastIndex', (req, res) => {
  const data = readData(tradersdiaryPath);
  if (data.length === 0) {
    res.status(404).json({ message: 'No entries found' });
  } else {
    const lastIndex = data[data.length - 1].index;
    res.json({ index: lastIndex });
  }
});

app.put('/tradersdiary/:index', (req, res) => {
  const data = readData(tradersdiaryPath);
  const { index } = req.params;
  const updatedEntry = req.body;

  const itemIndex = data.findIndex(item => item.index === parseInt(index));

  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...updatedEntry };
    writeData(tradersdiaryPath, data);
    res.json(data[itemIndex]);
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

app.delete('/tradersdiary/:index', (req, res) => {
  const data = readData(tradersdiaryPath);
  const { index } = req.params;
  const newData = data.filter(item => item.index !== parseInt(index));
  writeData(tradersdiaryPath, newData);
  res.status(204).send();
});

app.put('/data/:index', (req, res) => {
  const data = readData(filePath);
  const { index } = req.params;
  const itemIndex = data.findIndex(item => item.index === parseInt(index));

  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...req.body };
    writeData(filePath, data);
    res.json(data[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.delete('/data/:index', (req, res) => {
  const data = readData(filePath);
  const { index } = req.params;
  const newData = data.filter(item => item.index !== parseInt(index));
  writeData(filePath, newData);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

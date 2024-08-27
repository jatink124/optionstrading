const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const router = express.Router();
const journalPath = path.join(__dirname, 'tradingjournal.json');

// Helper function to read data from file
const readData = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper function to write data to file
const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Read all trading journal entries
router.get('/tradingjournals', (req, res) => {
  const data = readData(journalPath);
  res.json(data);
});

// Create a new trading journal entry
router.post('/tradingjournals', (req, res) => {
  const data = readData(journalPath);
  const newEntry = req.body;

  // Generate unique ID for new entry
  if (!newEntry.id) {
    newEntry.id = uuidv4();
  }

  // Add new entry to data
  data.push(newEntry);
  writeData(journalPath, data);
  res.status(201).json(newEntry);
});

// Update an existing trading journal entry
router.put('/tradingjournals/:id', (req, res) => {
  const data = readData(journalPath);
  const { id } = req.params;
  const updatedEntry = req.body;

  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...updatedEntry };
    writeData(journalPath, data);
    res.json(data[itemIndex]);
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

// Delete a trading journal entry
router.delete('/tradingjournals/:id', (req, res) => {
  const data = readData(journalPath);
  const { id } = req.params;
  const newData = data.filter(item => item.id !== id);
  writeData(journalPath, newData);
  res.status(204).send();
});

module.exports = router;

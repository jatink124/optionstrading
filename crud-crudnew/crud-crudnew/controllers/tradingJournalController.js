const TradingJournal = require('../models/tradingJournalModel');

// Create a new trading journal entry
exports.createEntry = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debugging: log the request body
    const newEntry = new TradingJournal(req.body);
    console.log('New Entry:', newEntry); // Debugging: log the new entry before saving
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error:', error); // Debugging: log the error
    res.status(400).json({ error: error.message });
  }
};

// Get all trading journal entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await TradingJournal.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific trading journal entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await TradingJournal.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a trading journal entry by ID
exports.updateEntry = async (req, res) => {
  try {
    const updatedEntry = await TradingJournal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedEntry) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a trading journal entry by ID
exports.deleteEntry = async (req, res) => {
  try {
    const deletedEntry = await TradingJournal.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

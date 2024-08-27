// controllers/dailyLearningController.js

const DailyLearning = require('../models/DailyLearning');

// Create a new entry
exports.createEntry = async (req, res) => {
  try {
    const { date, lessonsLearned, recommendations } = req.body;
    const newEntry = new DailyLearning({
      date,
      lessonsLearned,
      recommendations
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(400).json({ error: 'Failed to create entry.' });
  }
};

// Get all entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await DailyLearning.find();
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(400).json({ error: 'Failed to fetch entries.' });
  }
};

// Get a single entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await DailyLearning.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ error: 'Entry not found.' });
    }
    res.status(200).json(entry);
  } catch (error) {
    console.error('Error fetching entry:', error);
    res.status(400).json({ error: 'Failed to fetch entry.' });
  }
};

// Update an entry
exports.updateEntry = async (req, res) => {
  try {
    const updatedEntry = await DailyLearning.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEntry) {
      return res.status(404).json({ error: 'Entry not found.' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    console.error('Error updating entry:', error);
    res.status(400).json({ error: 'Failed to update entry.' });
  }
};

// Delete an entry
exports.deleteEntry = async (req, res) => {
  try {
    const deletedEntry = await DailyLearning.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ error: 'Entry not found.' });
    }
    res.status(200).json({ message: 'Entry deleted successfully.' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(400).json({ error: 'Failed to delete entry.' });
  }
};

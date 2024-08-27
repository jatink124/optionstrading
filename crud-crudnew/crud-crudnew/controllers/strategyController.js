// controllers/strategyController.js

const Strategy = require('../models/Strategy');

// Get all strategies
const getStrategies = async (req, res) => {
  try {
    const strategies = await Strategy.find();
    res.status(200).json(strategies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching strategies', error });
  }
};

// Add a new strategy
const addStrategy = async (req, res) => {
  const { todaysStrategy, thingsToDo } = req.body;
  try {
    const newStrategy = new Strategy({ todaysStrategy, thingsToDo });
    await newStrategy.save();
    res.status(201).json(newStrategy);
  } catch (error) {
    res.status(500).json({ message: 'Error adding strategy', error });
  }
};

// Update a strategy
const updateStrategy = async (req, res) => {
  const { id } = req.params;
  const { todaysStrategy, thingsToDo } = req.body;
  try {
    const updatedStrategy = await Strategy.findByIdAndUpdate(id, { todaysStrategy, thingsToDo }, { new: true });
    res.status(200).json(updatedStrategy);
  } catch (error) {
    res.status(500).json({ message: 'Error updating strategy', error });
  }
};

// Delete a strategy
const deleteStrategy = async (req, res) => {
  const { id } = req.params;
  try {
    await Strategy.findByIdAndDelete(id);
    res.status(200).json({ message: 'Strategy deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting strategy', error });
  }
};

module.exports = {
  getStrategies,
  addStrategy,
  updateStrategy,
  deleteStrategy
};

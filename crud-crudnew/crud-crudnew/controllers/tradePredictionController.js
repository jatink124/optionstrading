// controllers/tradePredictionController.js
const TradePrediction = require('../models/TradePrediction');

// Get all predictions
const getPredictions = async (req, res) => {
  try {
    const predictions = await TradePrediction.find();
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new prediction
const createPrediction = async (req, res) => {
  const { tradeAnalystName, niftyPrediction, bankniftyPrediction } = req.body;

  try {
    const newPrediction = new TradePrediction({
      tradeAnalystName,
      niftyPrediction,
      bankniftyPrediction
    });

    const savedPrediction = await newPrediction.save();
    res.status(201).json(savedPrediction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a prediction
const updatePrediction = async (req, res) => {
  const { index } = req.params;
  const { tradeAnalystName, niftyPrediction, bankniftyPrediction } = req.body;

  try {
    const updatedPrediction = await TradePrediction.findByIdAndUpdate(
      index,
      { tradeAnalystName, niftyPrediction, bankniftyPrediction },
      { new: true }
    );
    res.json(updatedPrediction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a prediction
const deletePrediction = async (req, res) => {
  const { index } = req.params;

  try {
    await TradePrediction.findByIdAndDelete(index);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPredictions,
  createPrediction,
  updatePrediction,
  deletePrediction
};

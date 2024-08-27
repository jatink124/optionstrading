// models/TradePrediction.js
const mongoose = require('mongoose');

const tradePredictionSchema = new mongoose.Schema({
  tradeAnalystName: {
    type: String,
    required: true
  },
  niftyPrediction: {
    type: String,
    required: true
  },
  bankniftyPrediction: {
    type: String,
    required: true
  }
}, { timestamps: true });

const TradePrediction = mongoose.model('TradePrediction', tradePredictionSchema);

module.exports = TradePrediction;

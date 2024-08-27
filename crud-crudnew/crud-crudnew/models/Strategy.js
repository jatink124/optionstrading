// models/Strategy.js

const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({
  todaysStrategy: { type: String, required: true },
  thingsToDo: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Strategy', StrategySchema);

const mongoose = require('mongoose');

const tradingJournalSchema = new mongoose.Schema({
  dateTime: { type: Date, required: true },
  assetType: { type: String, required: true },
  optionType: { type: String, required: true },
  entryPrice: { type: Number, required: true },
  exitPrice: { type: Number, required: true },
  strategy: { type: String, required: true },
  reasonForEntry: { type: String, required: true },
  contractSize: { type: Number, required: true },
  profitLoss: { type: Number, required: true },
  profitLossString: { type: String, required: true },
  comments: { type: String },
});

module.exports = mongoose.model('TradingJournal', tradingJournalSchema);

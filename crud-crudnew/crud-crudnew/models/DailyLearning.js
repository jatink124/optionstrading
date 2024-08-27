// models/DailyLearning.js

const mongoose = require('mongoose');

// Create a function to get IST time
function getISTDate() {
  const offsetIST = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
  return new Date(Date.now() + offsetIST);
}

const DailyLearningSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  lessonsLearned: { type: String, required: true },
  recommendations: { type: String, required: true },
  createdAt: {
    type: Date,
    default: getISTDate
  },
  updatedAt: {
    type: Date,
    default: getISTDate
  }
}, { timestamps: true });

module.exports = mongoose.model('DailyLearning', DailyLearningSchema);

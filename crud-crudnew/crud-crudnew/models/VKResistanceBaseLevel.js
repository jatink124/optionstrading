// models/VKResistanceBaseLevel.js

const mongoose = require('mongoose');

const VKResistanceBaseLevelSchema = new mongoose.Schema({
  index: { type: String, required: true },
  r1: { type: String, required: true },
  r2: { type: String, required: true },
  base1: { type: String, required: true },
  base2: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('VKResistanceBaseLevel', VKResistanceBaseLevelSchema);

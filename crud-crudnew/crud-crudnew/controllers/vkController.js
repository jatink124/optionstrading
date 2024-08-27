// controllers/vkController.js

const VKResistanceBaseLevel = require('../models/VKResistanceBaseLevel');

// Get all VK resistance and base level entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await VKResistanceBaseLevel.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Create a new VK resistance and base level entry
exports.createEntry = async (req, res) => {
  const { index, r1, r2, base1, base2 } = req.body;

  try {
    const newEntry = new VKResistanceBaseLevel({ index, r1, r2, base1, base2 });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

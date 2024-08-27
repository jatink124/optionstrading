const express = require('express');
const router = express.Router();
const tradingJournalController = require('../controllers/tradingJournalController');
const validateTradingJournal = require('../middlewares/validateTradingJournal');

// Create a new trading journal entry
router.post('/', validateTradingJournal, tradingJournalController.createEntry);

// Get all trading journal entries
router.get('/', tradingJournalController.getAllEntries);

// Get a specific trading journal entry by ID
router.get('/:id', tradingJournalController.getEntryById);

// Update a trading journal entry by ID
router.put('/:id', validateTradingJournal, tradingJournalController.updateEntry);

// Delete a trading journal entry by ID
router.delete('/:id', tradingJournalController.deleteEntry);

module.exports = router;

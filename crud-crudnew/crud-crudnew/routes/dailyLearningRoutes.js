// routes/dailyLearningRoutes.js

const express = require('express');
const router = express.Router();
const dailyLearningController = require('../controllers/dailyLearningController');

router.post('/', dailyLearningController.createEntry);
router.get('/', dailyLearningController.getAllEntries);
router.get('/:id', dailyLearningController.getEntryById);
router.put('/:id', dailyLearningController.updateEntry);
router.delete('/:id', dailyLearningController.deleteEntry);

module.exports = router;

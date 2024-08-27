// routes/strategyRoutes.js

const express = require('express');
const router = express.Router();
const {
  getStrategies,
  addStrategy,
  updateStrategy,
  deleteStrategy
} = require('../controllers/strategyController');

router.get('/', getStrategies);
router.post('/', addStrategy);
router.put('/:id', updateStrategy);
router.delete('/:id', deleteStrategy);

module.exports = router;

// routes/tradePredictionRoutes.js
const express = require('express');
const router = express.Router();
const {
  getPredictions,
  createPrediction,
  updatePrediction,
  deletePrediction
} = require('../controllers/tradePredictionController');

router.get('/predictions', getPredictions);
router.post('/predictions', createPrediction);
router.put('/predictions/:index', updatePrediction);
router.delete('/predictions/:index', deletePrediction);

module.exports = router;

// routes/vkRoutes.js

const express = require('express');
const router = express.Router();
const vkController = require('../controllers/vkController');

// Define routes for VK resistance and base level
router.get('/', vkController.getAllEntries);
router.post('/', vkController.createEntry);

module.exports = router;

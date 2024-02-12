// dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define a route to fetch data
router.get('/api/data', dataController.getData);

module.exports = router;

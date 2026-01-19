const express = require('express');
const router = express.Router();
const { sendContactMessage } = require('../controllers/contactController');

// Route: /api/contact
router.post('/', sendContactMessage);

module.exports = router;
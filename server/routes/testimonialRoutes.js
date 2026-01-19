const express = require('express');
const router = express.Router();
const { getApprovedTestimonials, submitTestimonial } = require('../controllers/testimonialController');

// Route: /api/testimonials
router.get('/', getApprovedTestimonials);
router.post('/', submitTestimonial);

module.exports = router;
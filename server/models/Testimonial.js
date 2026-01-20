const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  company: { type: String, required: true },
  isApproved: { type: Boolean, default: false }, // New Field
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
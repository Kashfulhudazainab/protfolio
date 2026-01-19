const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., "CEO at TechCorp"
  text: { type: String, required: true },
  isApproved: { 
    type: Boolean, 
    default: false // You will change this to true in MongoDB Atlas to show it
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
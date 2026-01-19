const Testimonial = require('../models/Testimonial');

// Get only approved testimonials
const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: true });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Submit a testimonial
const submitTestimonial = async (req, res) => {
  try {
    const testimonialData = { ...req.body, isApproved: false };
    const newTestimonial = await Testimonial.create(testimonialData);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: "Submission failed" });
  }
};

module.exports = {
  getApprovedTestimonials,
  submitTestimonial
};
const Testimonial = require('../models/Testimonial');

// GET only approved testimonials for the frontend
const getApprovedTestimonials = async (req, res) => {
  try {
    // Only find documents where isApproved is true
    const approvedData = await Testimonial.find({ isApproved: true }).sort({ date: -1 });
    res.status(200).json(approvedData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

// POST a new testimonial (defaults to isApproved: false)
const submitTestimonial = async (req, res) => {
  try {
    const newTestimonial = await Testimonial.create(req.body);
    res.status(201).json({ message: "Submitted for review!", data: newTestimonial });
  } catch (err) {
    res.status(400).json({ message: "Error saving feedback" });
  }
};

module.exports = { getApprovedTestimonials, submitTestimonial };
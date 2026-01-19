const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // Matches your 'id: 1'
  title: { type: String, required: true },
  category: { type: String, required: true },
  liveLink: { type: String, required: true },
  image: { type: String, required: true }, // This will be your Cloudinary URL
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
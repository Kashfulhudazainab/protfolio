const Project = require('../models/Projects');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}); // Find everything
    console.log("Projects found in DB:", projects); // Check your terminal!
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new project
const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data", error: error.message });
  }
};

module.exports = {
  getProjects,
  createProject
};
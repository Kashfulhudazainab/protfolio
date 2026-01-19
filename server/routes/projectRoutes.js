const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

// Route: /api/projects
router.get('/', getProjects);
router.post('/', createProject);

module.exports = router;
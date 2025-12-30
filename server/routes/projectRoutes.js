const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc    Create a new project
// @route   POST /api/projects
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    clientName: req.body.clientName,
    budget: req.body.budget,
    status: req.body.status
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
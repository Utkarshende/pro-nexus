const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @desc Get all users
// @route GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
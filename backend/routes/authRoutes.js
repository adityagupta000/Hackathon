const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, teamName, teamSize, projectIdea } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
      teamName,
      teamSize,
      projectIdea
    });

    // Save user to the database
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;

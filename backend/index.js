// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Ensure you have a User model

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://adityagupta802624:aditya6366207377@cluster0.pbvrr8q.mongodb.net/HackaThon';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Registration route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, teamName, teamSize, projectIdea } = req.body;
    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Create new user
    const newUser = new User({ name, email, password, teamName, teamSize, projectIdea });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

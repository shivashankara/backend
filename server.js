const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a GET route to fetch users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});
app.get('/api/products', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

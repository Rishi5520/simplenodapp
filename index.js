require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./src/model/User');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => res.send('API Running'));

// Create User
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// Get All Users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete User
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

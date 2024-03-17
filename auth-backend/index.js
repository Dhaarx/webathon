// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

const corsOption = {
  origin:['https://webathon-eta.vercel.app/','http://localhost:3000'],
  credentials:true,
  optionSuccessStatus:200,
}

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.json())
async function dbconnect(){
  await mongoose.connect('mongodb://localhost:27017/express');
}

dbconnect()

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Signin route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({error:true ,message: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({error:true, message: 'Invalid email or password' });
    }
    const token = jwt.sign({ email: user.email }, 'secret');
     return res.status(200).json({ message: 'Sign in successful', token });
  } catch (error) {
    console.error('Error signing in:', error);
    return  res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Initialize environment variables (so we can read MONGO_URI)
dotenv.config();

// 2. Connect to the Database
connectDB();

const app = express();

// 3. Middlewares
app.use(cors()); // Allows your Frontend (Port 5173) to talk to your Backend (Port 5000)
app.use(express.json()); // Allows the server to understand JSON data sent in a request

// 4. Basic Test Route
app.get('/', (req, res) => {
  res.send('Pro-Nexus API is running smoothly...');
});

// 5. Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
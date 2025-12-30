const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Create a dummy admin user
    await User.deleteMany();
    await User.create({
      name: "Utkarsha Shende",
      email: "utkarshende@test.com",
      password: "password123", // In real apps, we hash this!
      role: "admin"
    });

    console.log("Data Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
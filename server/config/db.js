const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      dbName: 'protfolio_db'
    });
    console.log(`✅ Connected to Database: ${conn.connection.name}`);
    console.log(`✅ Host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
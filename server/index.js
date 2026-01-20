
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoutes = require('./routes/contactRoutes');

const { errorHandler } = require('./middlewares/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Allows parsing of JSON data

// Basic Route for Testing
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

// Import Routes (We will create these next)
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
// });


// Add this at the end of the file
module.exports = app;


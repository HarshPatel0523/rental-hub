import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors';
import router from './routes/index.js';

// Configure env
dotenv.config();

// Connect to MongoDB
connectDB();

// Rest object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1', router);

// Health check
app.get('/', (_req, res) => {
  res.send("<h1>RentalHub API Server Running</h1>");
});

// PORT
const PORT = process.env.PORT || 5000;

// Run listen
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`.bgCyan.white
  );
});

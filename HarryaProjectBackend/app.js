// app.js
import express from 'express';
import connectDB from './db.js'; // singleton MongoDB connection
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Export app for Vercel
export default app;

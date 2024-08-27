const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');
const tradingJournalRoutes = require('./routes/tradingJournalRoutes');
// const errorHandler = require('./middlewares/errorHandler');
const dailyLearningRoutes = require('./routes/dailyLearningRoutes');
const vkRoutes = require('./routes/vkRoutes'); // Import VK routes
const tradePredictionRoutes = require('./routes/tradePredictionRoutes');
const strategyRoutes = require('./routes/strategyRoutes');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
// app.use('/api/users', userRoutes);
app.use('/api/tradingjournal', tradingJournalRoutes);
app.use('/api/dailylearningentries', dailyLearningRoutes);
app.use('/api/vk', vkRoutes); // Use VK routes
app.use('/api', tradePredictionRoutes);
app.use('/api/strategies', strategyRoutes);
// Error handling middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

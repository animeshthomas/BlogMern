const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://doccure:doccurepwd@cluster0.cmdwr.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import Routes
// const authRoutes = require('./routes/auth');
// const postRoutes = require('./routes/posts');
// const userRoutes = require('./routes/users');

// Use Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogging Application!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());
app.use('/blogs', blogRoutes);
app.use('/auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://doccure:doccurepwd@cluster0.cmdwr.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

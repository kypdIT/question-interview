const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//routes
const authRoutes = require('./routes/Users');
const adminRoutes = require('./routes/admin/auth');
const essayRoutes = require('./routes/Users');
const mulchoiceRoutes = require('./routes/Users');
const tagRoutes = require('./routes/Users');
const resultRoutes = require('./routes/Users');

//environment variable or you can say constants
env.config();

// mongodb connection
////mongodb+srv://kypdit94:<password>@cluster0.0ldjg.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.0ldjg.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', essayRoutes);
app.use('/api', mulchoiceRoutes);
app.use('/api', tagRoutes);
app.use('/api', resultRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
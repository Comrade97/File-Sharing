const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());

// Connect DB with server
const connectDB = require('./config/db');
connectDB();

// Templete engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes - to download page link
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

// Creating Server using express
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})
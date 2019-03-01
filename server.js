//import dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const cors = require('cors');

//create instances
const app = express();
const router = express.Router();

// connect to mongoDB through mongoose
mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', () => {
    console.log('Database connection has been made...');
}).on('error', (error) => {
    console.log('Database connection error:', error);
});

// use middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', apiRouter);

// setup route paths
app.post('/', function(req, res) {
    console.log('post', req)
});

// listen for requests
app.listen(process.env.PORT || 4000, () => {
    console.log('Server started...');
});
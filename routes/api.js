const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Conversation = require('../models/conversation');

router.get('/', (req, res) => {
    Conversation.find({}).then((data) => {
        res.send(data)
    });
})

router.post('/', (req, res) => {
    mongoose.connect(process.env.DB_URL || 'mongodb://localhost/shipmentDashboardDB');
    Conversation.insertMany(req.body, (err, docs) => {
        console.log(err);
        mongoose.connection.close();
    })
})

module.exports = router;
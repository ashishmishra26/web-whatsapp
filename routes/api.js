const express = require('express');
const router = express.Router();
const Conversation = require('../models/conversation');

router.get('/', (req, res) => {
    Conversation.find({}).then((data) => {
        res.send(data)
    });
})

router.post('/', (req, res) => {
    console.log('hi', req);
    // Conversation.insertMany({}).then((data) => {
    //     console.log(data);
    //     res.send(data)
    // });
})

module.exports = router;
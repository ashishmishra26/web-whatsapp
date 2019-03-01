const express = require('express');
const router = express.Router();
const Conversation = require('../models/conversation');

router.get('/', (res) => {
    Conversation.find({}).then((data) => {
        console.log(data);
        res.send(data)
    });
})

router.post('/', (req, res) => {
    Conversation.insertMany({}).then((data) => {
        console.log(data);
        res.send(data)
    });
})

module.exports = router;
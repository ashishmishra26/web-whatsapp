const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model for database

const conversationSchema = Schema({
    sender: {
        type: String,
        required: [true, 'sender name is required']
    },
    reciever: {
        type: String,
        required: [true, 'reciever name is required']
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    timestamp: {
        type: Number,
        required: [true, 'timestamp is required']
    }
});

const Conversation = mongoose.model('conversation',conversationSchema);

module.exports = Conversation;
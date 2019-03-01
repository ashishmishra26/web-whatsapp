require('dotenv').config();
const mongoose = require('mongoose');
const Conversation = require('./models/conversation');
mongoose.connect(process.env.DB_URL || 'mongodb://localhost/shipmentDashboardDB');

var data = {
    sender: 'ashish mishra',
    reciever: 'supratik basu',
    content: 'hi',
    timestamp: Date.now()
};

Conversation.insertMany(data, (err, docs) => {
    console.log(err);
    mongoose.connection.close();
})

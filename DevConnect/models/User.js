const mongoose = require('mongoose');

// Databse schema
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String || email,
        required: true,
        unique: true
    },
    password : {
        type: password,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);
const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

// connect to mongoDB using the mongoURI
const connectDB = async () => {
    try {
        // since it return a promise, we want to put await in front of it
        await mongoose.connect(db, { 
            useNewUrlParser: true 
        });  // returns a promise
        console.log("MongoDB Connected ... ");
    } catch (err) {
        console.error(err.message);
        // escape from the process w/ failure
        process.exit(1);
    }
}

module.exports = connectDB;
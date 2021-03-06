const express = require('express');
const connectDB = require('./config/db'); // connect the db file

const app = express();

// Connect Database
connectDB();

// initialize middleware
app.use(express.json({ extended: false  })) // allows to reques data in routes


app.get('/', (req, res) => res.send('API Running')); // send data to the browser

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000; //process.env.PORT looks for an environment variable called PORT when we deploy to Heroku. When we run locally it runs on port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
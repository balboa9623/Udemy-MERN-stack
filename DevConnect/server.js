const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running')); // send data to the browser

const PORT = process.env.PORT || 5000; //process.env.PORT looks for an environment variable called PORT when we deploy to Heroku. When we run locally it runs on port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
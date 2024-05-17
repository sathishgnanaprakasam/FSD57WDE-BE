// require the express module
const express = require('express');

// create a new express application
const app = express();

// define the first route '/'
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// start the express application on port 3001
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});
const express = require('express');
const app = express();
const users = require('./routes/users');

// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes

app.use('/api/v1/users',users)

const port = process.env.PORT || 5000


app.listen(port, console.log(`server is listening on port ${port}...`));
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { post } = require('./routes/get');
const bodyParser = require('body-parser');
require('dotenv/config')
const port = process.env.PORT || 3000

// app.set('view engine', "ejs");

app.use(bodyParser.json());
// app.use(express.static('/public'));

//Import routes
const ROUTE = require('./routes/get');
app.use('/', ROUTE);


//db connect
mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log('connected to DB')
);
//listen
app.listen(port);

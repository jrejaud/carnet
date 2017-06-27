//Server.js

//Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

//Constants
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true}));

//Routes
//This hits the index.js file in the routes directory
require('./app/routes')(app, {});

app.listen(PORT, function() {
  console.log('App is live on '+PORT);
});

//Server.js

//Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

//Constants
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true}));

//Use local URL for dev and url for prod
MongoClient.connect(db.localurl, function(err, database) {
    if (err) {
      return console.log(err);
    }

    console.log("Connected to Mongo DB correctly");

    //Routes
    //This hits the index.js file in the routes directory
    require('./app/routes')(app, database);

    app.listen(PORT, function() {
      console.log('App is live on '+PORT);
    });
});

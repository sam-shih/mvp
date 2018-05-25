const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

//app.get()??

app.listen(8080, function() {
  console.log('listening on port 8080!');
});


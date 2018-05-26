const express = require('express');
const parser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded());

app.post('/question', function(req, res) {
  console.log("POST");
  db.plusStreak();
  res.end();
})

let port = 8080;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});


// app.get('/index', function (req, res) {

// })
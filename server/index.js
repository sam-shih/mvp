const express = require('express');
const parser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded());

app.get('/index', function (req, res) {

})

app.post('/question', function(req, res) {
  console.log("POST");
  console.log(req.data);
  // db.plusStreak(req.body.data);
  res.end();
})

let port = 8080;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});


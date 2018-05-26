const express = require('express');
const parser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded());


app.get('/question', function (req, res) {
  console.log("mount");
  //console.log(db.getStreak());
  db.getStreak((count) =>{
    console.log(count, 'this');
    res.writeHead(200);
    res.end(JSON.stringify(count));
  });
})

app.post('/question/yes', function(req, res) {
  console.log("POST");
  db.plusStreak();
  res.end();
})

app.post('/question/no', function(req, res) {
  console.log("POST");
  db.resetStreak();
  res.end();
})

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

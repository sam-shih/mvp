const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');

let dbInit = mongoose.connection;

dbInit.once('open', function() {
  console.log('database connected successfully');
})

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  streak: Number
});

let User = mongoose.model('User', userSchema);

let hrrThurtyWan = new User({
  name: 'Hack Reacter Remote 31!',
  email: 'samuel.jh.shih@gmail.com',
  streak: 0
});

let plusStreak = () => {
  User.findOne({name: 'Hack Reacter Remote 31!'}, (err, doc) => {
    console.log(doc);
    doc.streak = ;
    doc.save();
  })
  console.log('made it into this file');
}

module.exports.plusStreak = plusStreak;

// let signUp = (users) => {
//   let data = {};
//   data.name = users;
//   data.email = users;
//   data.streak = 0;
//   let newUser = new User(data);
//   repo.save((err) => {
//     if (err) return console.log(err);
//     console.log('Welcome!', repo);
//   })
// }
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

let signUp = (users) => {
  let data = {};
  data.name = users;
  data.email = users;
  data.streak = 0;
  let newUser = new User(data);
  repo.save((err) => {
    if (err) return console.log(err);
    console.log('Welcome!', repo);
  })
}

let plusStreak = (email) => {
  // User.findOne({'email' : email}, 'streak', function (err, user) {
  //   if (err) return console.log(err)
  //   user.streak = user.streak++;
  // });
  console.log(email, 'made it into this file');
}

module.exports.plusStreak = plusStreak;
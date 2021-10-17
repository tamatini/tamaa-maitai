// Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
});

// Model and instance functions
userSchema.pre('save', async function save() {
  try {
    const user = this;
    const salt = await bcrypt.genSalt(10, "a");
    const hash = await bcrypt.hash(user.password, salt);
    return user.password = hash;
  } catch (err) {
    return console.log(err);
  }
});

userSchema.methods.isValid = function(candidatePassword, cb) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password, function (err, isValid) {
    if (err) return cb(err);
    if (cb) return cb(null, isValid);
  })
};

userSchema.methods.generateToken = function () {
  const user = this;
  return jwt.sign({ _id: user._id, role: 'admin' }, 'secret', {expiresIn: '1000s'})
};

const User = mongoose.model('User', userSchema);
module.exports = User;

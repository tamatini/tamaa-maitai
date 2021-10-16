const mongoose = require('mongoose');

const connect = async() => {
  try {
    const uri = 'mongodb://localhost:27017/tamaa-maitai'
    await mongoose.connect(uri);
    return console.log('Connected to db');
  } catch (err) {
    console.log(err);
  }
};

const close = async () => {
  try {
    await mongoose.disconnect();
  } catch(err) {
    console.log(err);
  }
};

module.exports = {
  connect,
  close
};

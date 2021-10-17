// Imports
const User = require('../Models/UserModel');
const { userSpec } = require('../../Helpers/functions');

// Methods
// Create a new user
// POST /api/v1/auth/register
registerUser = async(req, res) => {
  try {
    const body = req.body;
    const user = new User(body);
    const findUser = await User.findOne({$or: [{username: body.username}, {mail: body.mail}]})
    if (findUser) return res.status(409).json('That username or email is already in use')
    await user.save();
    res.status(201).json({
      success: true,
      code: 201,
      data: userSpec(user)
    });
  } catch (err) {
    console.log(err);
  }
};

// Log in
// POST /api/v1/auth/login
login = async(req, res) => {
  try {
    const { username, password } = req.body
    if (username === '') return res.status(200).json('Please enter your username!');
    if (password === '') return res.status(200).json('Please enter your password!');
    const user = await User.findOne({username: username});
    if (!user) return res.status(200).json('That username does not exist.')
    user.isValid(password, function (err, isValid) {
      if (!isValid) {
        return res.json(200).json('Wrong password, please try again.');
      }
      return res.status(200).header('auth-header', user.generateToken()).json('You have logged in');
    });
  } catch (err) {
    console.log(err);
  }
};

// Log out
// GET /api/v1/auth/logout
logout = async(req, res) => {
  console.log('this is the logout function')
};

// Exports
module.exports = {
  registerUser,
  login,
  logout
};

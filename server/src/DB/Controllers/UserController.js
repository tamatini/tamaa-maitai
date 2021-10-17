// Imports
const User = require('../Models/UserModel');
const userSpec = require('../../Helpers/functions').userSpec;

// Methods
// Get all users
// GET /api/v1/users
getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    const user = users.map(user => {
      return userSpec(user);
    })
    res.status(200).json({
      success: true,
      code: 200,
      data: user
    })
  } catch (err) {
    console.log(err);
  }
};

// Return user with id as a parameter
// GET /api/v1/users/:id
getUserById = async(req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      code: 200,
      data: userSpec(user)
    });
  } catch (err) {
    console.log(err);
  }
};

// Update user with id as a parameter
// PUT /api/v1/users/:id
updateUser = async(req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body, {new: true});
    res.status(201).json({
      success: true,
      code: 201,
      data: userSpec(user)
    });
  } catch (err) {
    console.log(err);
  }
};

// delete user with id as a parameter
// DELETE /api/v1/users/:id
deleteUser = async(req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      code: 200,
      msg: "User has been deleted"
    });
  } catch (err) {
    console.log(err);
  }
};

// Exports
module.exports = {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
};

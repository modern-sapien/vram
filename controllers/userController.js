const User = require("../models/User");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    
    res.status(200).json({ success: true, data: users})
  } catch (err) {
    res.status(400).json({success:false})
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return  res.status(400).json({success:false})
    }

    res.status(200).json({success: true, data: user})
  } catch (error) {
    res.status(400).json({success:false})
  }
};

// @desc    Create new user
// @route   POST /api/v1/users/
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user
    })
  } catch (err) {
    res.status(400).json({success: false})
  }
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `display updated user ${req.params.id}` });
};

// @desc    Delete user
// @route   Delete /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `delete user ${req.params.id}` });
};

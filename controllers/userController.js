const User = require("../models/User");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
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
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: user });
};

// @desc    Delete user
// @route   Delete /api/v1/users/:id
// @access  Private
exports.deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: "removed user" });
};

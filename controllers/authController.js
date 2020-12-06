const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc    Register a user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) =>   {
   const { username, email, password } = req.body;

   // create user
   const user = await User.create({
       username, email, password
   })

   // create TOKEN
   const token = user.getSignedJwtToken()

    res.status(200).json({success: true, token, data: user})
})

// @desc    Login a user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) =>   {
   const { email, password } = req.body;

   // Validate that there is an email and password
   if(!email || !password)  {
       return next(new ErrorResponse("Please provide an email and a password", 400));
   }

   // Check for user
   const user = await User.findOne({ email }).select("+password");

   if(!user)    {
    return next(new ErrorResponse("User not found", 401));
   }

   // Check if password matches
   const isMatch = await user.matchPassword(password);

   if(!isMatch)    {
    return next(new ErrorResponse("Invalid credentials", 401));
   }

   // Create TOKEN
   const token = user.getSignedJwtToken()

    res.status(200).json({success: true, token, data: user})
})
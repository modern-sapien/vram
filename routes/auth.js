const express = require("express");
const { register, login, getMe, forgotPassword, resetPassword, updateDetails, updatePassword } = require("../controllers/authController");
const {protect} = require("../middleware/auth")
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updateDetails", protect, updateDetails);
router.put("/updatePassword", protect, updatePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resettoken", resetPassword);

module.exports = router;
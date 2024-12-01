// src/services/authService.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Error registering user: " + error.message);
  }
};

exports.loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { token, user };
  } catch (error) {
    throw new Error("Error logging in user: " + error.message);
  }
};
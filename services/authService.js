const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ id: user.id}, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.login = async (email, password) => {
  let user;
    user = await Admin.findOne({ where: { email } });
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user);
  return { user, token };
};

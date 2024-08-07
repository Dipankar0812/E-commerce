const bcrypt = require("bcrypt");
const saltRounds = 10;
const Register = require("../Models/RegisterModel");

const RegisterUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    if (!name || !password || !email) {
      return res.status(400).json({ msg: "Enter all the required data" });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userCreate = await Register.create({
      name,
      password: hashedPassword,
      email,
    });
    return res.status(201).json(userCreate);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: `Internal Server Error: ${error.message}` });
  }
};

module.exports = { RegisterUser };

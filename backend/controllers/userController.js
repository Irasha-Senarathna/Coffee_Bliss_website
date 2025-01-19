import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';


const getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.json(users);
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to get users'})
    }
};


const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
      const user = await userModel.findOne({ where: { email } });
      
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  
      const token = createToken(user.user_id);
      res.json({success: true, token});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
}
  
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
  
const registerUser = async (req, res) => {
    const {user_name, password, email} = req.body;
    try {
      // Checking if the user already exits
      const exists = await userModel.findOne({ where: { email: email.toLowerCase() } });
      if (exists) {
        return res.status(400).json({ success: false, message: 'Uaer already exists' });
      }
  
      // Validating email format and strong password
      if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: 'Enter a valid email' });
      }
      if (password.length < 8) {
        return res.json({success: false, message: 'Password must be at least 8 characters'});
      }
  
      // Hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Creating a new user
      const newUser = new userModel({
        user_name: user_name,
        email: email,
        password: hashedPassword
      });
  
      const user = await newUser.save();
      const token = createToken(user.user_id);
      res.json({success: true, token});
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export { getUsers, loginUser, registerUser };

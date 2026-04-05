import employeeModel from '../models/employeeModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeModel.findByPk(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginEmployee = async (req, res) => {
  const {email, password} = req.body;
  try {
    const employee = await employeeModel.findOne({ where: { email } });
    
    if (!employee) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = createToken(employee.emp_id);
    res.json({success: true, token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

const registerEmployee = async (req, res) => {
  const {emp_name, password, email} = req.body;
  try {
    // Checking if the user already exits
    const exists = await employeeModel.findOne({ where: { email: email.toLowerCase() } });
    if (exists) {
      return res.status(400).json({ success: false, message: 'Employee already exists' });
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
    const newEmployee = new employeeModel({
      emp_name: emp_name,
      email: email,
      password: hashedPassword
    });

    const employee = await newEmployee.save();
    const token = createToken(employee.emp_id);
    res.json({success: true, token});
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { getEmployeeById, loginEmployee, registerEmployee };
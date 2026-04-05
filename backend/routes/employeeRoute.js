import express from 'express';
import { getEmployeeById, loginEmployee, registerEmployee } from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.get('/get/:id', getEmployeeById);
employeeRouter.post('/login', loginEmployee);
employeeRouter.post('/register', registerEmployee);

export default employeeRouter;

import express from 'express';
import { getUsers, loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/get', getUsers);  // Test route to get all users
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);

export default userRouter;

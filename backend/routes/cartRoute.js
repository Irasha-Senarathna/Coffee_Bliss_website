import express from 'express';
import { addCart, getCartsByUserId, getCartDetailsByCartId } from '../controllers/cartController.js';

const cartRouter = express.Router();

cartRouter.post('/addCart', addCart);
cartRouter.get('/getCartsByUserId/:user_id', getCartsByUserId);
cartRouter.get('/getCartDetailsByCartId/:cart_id', getCartDetailsByCartId);

export default cartRouter;

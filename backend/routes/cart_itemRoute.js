import express from 'express';
import { addCartItem, getCartItemsByCartId, removeOneCartItem, removeCartItem, clearCartItems } from '../controllers/cart_itemController.js';

const cart_itemRouter = express.Router();

cart_itemRouter.post('/addCartItem', addCartItem);
cart_itemRouter.get('/getCartItemsByCartId/:cart_id', getCartItemsByCartId);
cart_itemRouter.delete('/removeOneCartItem/:cart_id/:item_id', removeOneCartItem);
cart_itemRouter.delete('/removeCartItem/:cart_id/:item_id', removeCartItem);
cart_itemRouter.delete('/clearCartItems/:cart_id', clearCartItems);

export default cart_itemRouter;
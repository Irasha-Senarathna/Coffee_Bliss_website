import express from 'express';
import { addDelivery, getDeliveries, updateStatus } from '../controllers/deliveryController.js';

const deliveryRouter = express.Router();

deliveryRouter.post('/add', addDelivery);
deliveryRouter.get('/get', getDeliveries);
deliveryRouter.put('/update/:delivery_id', updateStatus)

export default deliveryRouter;
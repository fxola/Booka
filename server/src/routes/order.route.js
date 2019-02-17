import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', OrderController.fetchAllOrders);
orderRouter.post('/', OrderController.createOrder);
orderRouter.put('/:id', OrderController.updateOrder);

export default orderRouter;

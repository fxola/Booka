import OrderService from '../services/order.service';

class OrderController {
  static createOrder(req, res) {
    const newOrder = req.body;
    const createdOrder = OrderService.createOrder(newOrder);
    if (createdOrder) {
      return res.status(201).json({
        status: 'successful',
        data: createdOrder
      });
    }

    return res.status(404).json({
      status: 'Not Successful',
      data: 'Order was not created Successfully'
    });
  }

  static updateOrder(req, res) {
    const update = req.body;
    const updatedOrder = OrderService.updateOrder(req.params.id, update);

    if (updatedOrder) {
      return res.status(202).json({
        status: 'Order Updated Successfully',
        data: updatedOrder
      });
    }

    return res.status(404).json({
      status: 'Not Successful',
      data: 'Order Not Found'
    });
  }

  static fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    if (allOrders) {
      return res.status(200).json({
        status: 'success',
        data: allOrders
      });
    }
    return res.status(404).json({
      status: 'Not Successful',
      data: 'Something went Wrong'
    });
  }
}

export default OrderController;

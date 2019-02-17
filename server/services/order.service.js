/* eslint-disable no-param-reassign */
import mockData from '../utils/mockData';

import Order from '../models/order.model';

class OrderService {
  static fetchAllOrders() {
    const orderList = mockData.orders.map(order => {
      const orderInstance = new Order(
        parseInt(order.id, 10),
        order.name,
        order.address,
        order.orderTotal,
        order.phoneNumber,
        order.mealOrder
      );
      return orderInstance;
    });
    return orderList;
  }

  static updateOrder(id, incomingOrder) {
    const orderToBeUpdatedIndex = mockData.oders.find(order => order.id === parseInt(id, 10));

    const newOrder = new Order(
      parseInt(id, 10),
      incomingOrder.id,
      incomingOrder.name,
      incomingOrder.address,
      incomingOrder.orderTotal,
      incomingOrder.phoneNumber,
      incomingOrder.mealOrder
    );

    if (orderToBeUpdatedIndex) {
      mockData.orders.splice(orderToBeUpdatedIndex, 1, newOrder);
    } else {
      return false;
    }
    return newOrder;
  }

  static createOrder(order) {
    const orderLength = mockData.orders.length;

    const lastOrderId = mockData.orders[orderLength - 1].id;

    order.id = lastOrderId + 1;
    if (mockData.orders.push(order)) {
      return order;
    }
    return false;
  }
}

export default OrderService;

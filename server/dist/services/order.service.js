"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mockData = _interopRequireDefault(require("../utils/mockData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderService =
/*#__PURE__*/
function () {
  function OrderService() {
    _classCallCheck(this, OrderService);
  }

  _createClass(OrderService, null, [{
    key: "fetchAllOrders",
    value: function fetchAllOrders() {
      var orderList = _mockData.default.orders.map(function (order) {
        var orderInstance = new _order.default(parseInt(order.id, 10), order.name, order.address, order.orderTotal, order.phoneNumber, order.mealOrder);
        return orderInstance;
      });

      return orderList;
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, incomingOrder) {
      var orderToBeUpdatedIndex = _mockData.default.oders.find(function (order) {
        return order.id === parseInt(id, 10);
      });

      var newOrder = new _order.default(parseInt(id, 10), incomingOrder.id, incomingOrder.name, incomingOrder.address, incomingOrder.orderTotal, incomingOrder.phoneNumber, incomingOrder.mealOrder);

      if (orderToBeUpdatedIndex) {
        _mockData.default.orders.splice(orderToBeUpdatedIndex, 1, newOrder);
      } else {
        return false;
      }

      return newOrder;
    }
  }, {
    key: "createOrder",
    value: function createOrder(order) {
      var orderLength = _mockData.default.orders.length;
      var lastOrderId = _mockData.default.orders[orderLength - 1].id;
      order.id = lastOrderId + 1;

      if (_mockData.default.orders.push(order)) {
        return order;
      }

      return false;
    }
  }]);

  return OrderService;
}();

var _default = OrderService;
exports.default = _default;
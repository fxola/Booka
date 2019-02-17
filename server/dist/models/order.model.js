"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function Order(id, name, address, orderTotal, phoneNumber, mealOrder) {
  _classCallCheck(this, Order);

  this.id = id;
  this.name = name;
  this.address = address;
  this.orderTotal = orderTotal;
  this.phoneNumber = phoneNumber;
  this.mealOrder = mealOrder;
};

var _default = Order;
exports.default = _default;
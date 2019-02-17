"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderRouter = (0, _express.Router)();
orderRouter.get('/', _order.default.fetchAllOrders);
orderRouter.post('/', _order.default.createOrder);
orderRouter.put('/:id', _order.default.updateOrder);
var _default = orderRouter;
exports.default = _default;
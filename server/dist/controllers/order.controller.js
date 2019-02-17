"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderController =
/*#__PURE__*/
function () {
  function OrderController() {
    _classCallCheck(this, OrderController);
  }

  _createClass(OrderController, null, [{
    key: "createOrder",
    value: function createOrder(req, res) {
      var newOrder = req.body;

      var createdOrder = _order.default.createOrder(newOrder);

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
  }, {
    key: "updateOrder",
    value: function updateOrder(req, res) {
      var update = req.body;

      var updatedOrder = _order.default.updateOrder(req.params.id, update);

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
  }, {
    key: "fetchAllOrders",
    value: function fetchAllOrders(req, res) {
      var allOrders = _order.default.fetchAllOrders();

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
  }]);

  return OrderController;
}();

var _default = OrderController;
exports.default = _default;
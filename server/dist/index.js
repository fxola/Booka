"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
var app = (0, _express.default)();
app.use(_bodyParser.default.json());
var PORT = 3000;
app.get('/', function (req, res) {
  return res.send('Up and Running');
}); // Handles

app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menu', _menu.default);
app.use('/api/v1/orders', _order.default);
app.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log("server is listening on port:".concat(PORT));
});
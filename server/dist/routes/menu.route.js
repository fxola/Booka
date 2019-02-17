"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuRouter = (0, _express.Router)();
menuRouter.get('/', _menu.default.fetchMenu);
menuRouter.post('/', _menu.default.addMenu);
var _default = menuRouter;
exports.default = _default;
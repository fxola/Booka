"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meal = function Meal(id, name, description, price) {
  _classCallCheck(this, Meal);

  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
};

var _default = Meal;
exports.default = _default;
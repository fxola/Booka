"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealRouter = (0, _express.Router)();
mealRouter.get('/', _meal.default.fetchAllMeals);
mealRouter.get('/:id', _meal.default.getAMeal);
mealRouter.post('/', _meal.default.addAMeal);
mealRouter.delete('/:id', _meal.default.removeAMeal);
mealRouter.put('/:id', _meal.default.updateMeal);
var _default = mealRouter;
exports.default = _default;
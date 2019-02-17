"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mockData = _interopRequireDefault(require("../utils/mockData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealService =
/*#__PURE__*/
function () {
  function MealService() {
    _classCallCheck(this, MealService);
  }

  _createClass(MealService, null, [{
    key: "fetchAllMeals",
    value: function fetchAllMeals() {
      var MealList = _mockData.default.meals.map(function (meal) {
        var mealInstance = new _meal.default(meal.id, meal.name, meal.description, meal.price);
        return mealInstance;
      });

      return MealList;
    }
  }, {
    key: "addMeal",
    value: function addMeal(meal) {
      var mealLength = _mockData.default.meals.length;
      var lastMealId = _mockData.default.meals[mealLength - 1].id;
      meal.id = lastMealId + 1;

      _mockData.default.meals.push(meal);

      return meal;
    }
  }, {
    key: "getAMeal",
    value: function getAMeal(id) {
      var foundMeal = _mockData.default.meals.find(function (meal) {
        return meal.id === parseInt(id, 10);
      });

      return foundMeal || {};
    }
  }, {
    key: "removeMeal",
    value: function removeMeal(id) {
      var mealIndex = _mockData.default.meals.findIndex(function (meal) {
        return meal.id === parseInt(id, 10);
      });

      if (mealIndex) {
        return _mockData.default.meals.splice(mealIndex, 1);
      }

      return false;
    }
  }, {
    key: "updateMeal",
    value: function updateMeal(id, incomingMeal) {
      var mealToBeUpdatedIndex = _mockData.default.meals.find(function (meal) {
        return meal.id === parseInt(id, 10);
      });

      var newMeal = new _meal.default(parseInt(id, 10), incomingMeal.name, incomingMeal.description, incomingMeal.price);

      if (mealToBeUpdatedIndex) {
        _mockData.default.meals.splice(mealToBeUpdatedIndex, 1, newMeal);
      } else {
        return false;
      }

      return newMeal;
    }
  }]);

  return MealService;
}();

var _default = MealService;
exports.default = _default;
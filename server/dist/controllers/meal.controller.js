"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealController =
/*#__PURE__*/
function () {
  function MealController() {
    _classCallCheck(this, MealController);
  }

  _createClass(MealController, null, [{
    key: "fetchAllMeals",
    value: function fetchAllMeals(req, res) {
      var allMeals = _meal.default.fetchAllMeals();

      return res.status(200).json({
        status: 'success',
        data: allMeals
      });
    }
  }, {
    key: "addAMeal",
    value: function addAMeal(req, res) {
      /**
       *  expect meal of the format
       * {
       *    name: "Amala and Ewedu",
       *    description:"Tasty and Yummy",
       *    price: 500
       * }
       */
      var newMeal = req.body;

      var createdMeal = _meal.default.addMeal(newMeal);

      return res.status(201).json({
        status: 'successful',
        data: createdMeal
      });
    }
  }, {
    key: "getAMeal",
    value: function getAMeal(req, res) {
      var foundMeal = _meal.default.getAMeal(req.params.id);

      if (foundMeal) {
        return res.status(200).json({
          status: 'successful',
          data: foundMeal
        });
      }

      return res.status(404).json({
        status: 'Not Successful',
        data: 'Meal Does Not Exist'
      });
    }
  }, {
    key: "removeAMeal",
    value: function removeAMeal(req, res) {
      var deletedMeal = _meal.default.removeMeal(req.params.id);

      if (deletedMeal) {
        return res.status(204).json({
          status: 'deleted succesfully',
          data: deletedMeal
        });
      }

      return res.status(404).json({
        status: 'Not Successful',
        data: 'Meal Not Found'
      });
    }
  }, {
    key: "updateMeal",
    value: function updateMeal(req, res) {
      var update = req.body;

      var updatedMeal = _meal.default.updateMeal(req.params.id, update);

      if (updatedMeal) {
        return res.status(202).json({
          status: 'Meal Updated Successfully',
          data: updatedMeal
        });
      }

      return res.status(404).json({
        status: 'Not Successful',
        data: 'Meal Not Found'
      });
    }
  }]);

  return MealController;
}();

var _default = MealController;
exports.default = _default;
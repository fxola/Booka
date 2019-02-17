"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuController =
/*#__PURE__*/
function () {
  function MenuController() {
    _classCallCheck(this, MenuController);
  }

  _createClass(MenuController, null, [{
    key: "addMenu",
    value: function addMenu(req, res) {
      var newMenu = req.body;

      var createdMenu = _menu.default.addMenu(newMenu);

      return res.status(201).json({
        status: 'successful',
        data: createdMenu
      });
    }
  }, {
    key: "fetchMenu",
    value: function fetchMenu(req, res) {
      var allMenus = _menu.default.fetchMenu();

      return res.status(200).json({
        status: 'success',
        data: allMenus
      });
    }
  }]);

  return MenuController;
}();

var _default = MenuController;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mockData = _interopRequireDefault(require("../utils/mockData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuService =
/*#__PURE__*/
function () {
  function MenuService() {
    _classCallCheck(this, MenuService);
  }

  _createClass(MenuService, null, [{
    key: "fetchMenu",
    value: function fetchMenu() {
      var menuList = _mockData.default.menu.map(function (menu) {
        var menuInstance = new _menu.default(parseInt(menu.id, 10), menu.meals, menu.date);
        return menuInstance;
      });

      return menuList;
    }
  }, {
    key: "addMenu",
    value: function addMenu(menu) {
      var menuLength = _mockData.default.menu.length;
      var lastMenuId = _mockData.default.menu[menuLength - 1].id;
      menu.id = lastMenuId + 1;

      _mockData.default.menu.push(menu);

      return menu;
    }
  }]);

  return MenuService;
}();

var _default = MenuService;
exports.default = _default;
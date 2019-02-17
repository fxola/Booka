/* eslint-disable no-param-reassign */

import mockData from '../utils/mockData';

import Menu from '../models/menu.model';

class MenuService {
  static fetchMenu() {
    const menuList = mockData.menu.map(menu => {
      const menuInstance = new Menu(parseInt(menu.id, 10), menu.meals, menu.date);
      return menuInstance;
    });

    return menuList;
  }

  static addMenu(menu) {
    const menuLength = mockData.menu.length;

    const lastMenuId = mockData.menu[menuLength - 1].id;

    menu.id = lastMenuId + 1;

    mockData.menu.push(menu);

    return menu;
  }
}

export default MenuService;

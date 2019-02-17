import MenuService from '../services/menu.service';

class MenuController {
  static addMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = MealService.addMenu(newMenu);

    return res.status(201).json({
      status: 'successful',
      data: createdMenu
    });
  }

  static fetchMenu(req, res) {
    const allMenus = MenuService.fetchMenu();

    return res.status(200).json({
      status: 'success',
      data: allMenus
    });
  }
}

import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const menuRouter = Router();

menuRouter.get('/', MenuController.fetchMenu);
menuRouter.post('/', MenuController.addMenu);

export default menuRouter;

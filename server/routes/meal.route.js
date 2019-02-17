import { Router } from 'express';

import MealController from '../controllers/meal.controller';

const mealRouter = Router();

mealRouter.get('/', MealController.fetchAllMeals);
mealRouter.get('/:id', MealController.getAMeal);
mealRouter.post('/', MealController.addAMeal);
mealRouter.delete('/:id', MealController.removeAMeal);
mealRouter.put('/:id', MealController.updateMeal);

export default mealRouter;

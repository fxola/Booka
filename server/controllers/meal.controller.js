import MealService from '../services/meal.service';

class MealController {
  static fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();

    return res.status(200).json({
      status: 'success',
      data: allMeals
    });
  }

  static addAMeal(req, res) {
    /**
     *  expect meal of the format
     * {
     *    name: "Amala and Ewedu",
     *    description:"Tasty and Yummy",
     *    price: 500
     * }
     */
    const newMeal = req.body;

    const createdMeal = MealService(newMeal);

    return res.status(201).json({
      status: 'successful',
      data: createdMeal
    });
  }

  static getAMeal(req, res) {
    const foundMeal = MealService.getAMeal(req.params.id);

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
}

export default MealController;

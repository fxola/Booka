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
    const createdMeal = MealService.addMeal(newMeal);

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

  static removeAMeal(req, res) {
    const deletedMeal = MealService.removeMeal(req.params.id);

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

  static updateMeal(req, res) {
    const update = req.body;
    const updatedMeal = MealService.updateMeal(req.params.id, update);

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
}

export default MealController;

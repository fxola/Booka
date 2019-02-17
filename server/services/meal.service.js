/* eslint-disable no-param-reassign */
import mockData from '../utils/mockData';
import Meal from '../models/meal.model';

class MealService {
  static fetchAllMeals() {
    const validMeal = mockData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.price = meal.price;

      return newMeal;
    });

    return validMeal;
  }

  static addMeal(meal) {
    const mealLength = mockData.meals.length;

    const lastMealId = mockData.meals[mealLength - 1].id;

    meal.id = lastMealId + 1;

    mockData.meals.push(meal);

    return meal;
  }

  static getAMeal(id) {
    const foundMeal = mockData.meals.find(meal => meal.id === parseInt(id, 10));

    return foundMeal || {};
  }

  static removeMeal(id) {
    const mealIndex = mockData.meals.findIndex(meal => meal.id === parseInt(id, 10));

    if (mealIndex) {
      return mockData.meals.splice(mealIndex, 1);
    }
    return false;
  }

  static updateMeal(id, incomingMeal) {
    const mealToBeUpdatedIndex = mockData.meals.find(meal => meal.id === parseInt(id, 10));

    const newMeal = new Meal();
    newMeal.id = parseInt(id, 10);
    newMeal.name = incomingMeal.name;
    newMeal.description = incomingMeal.description;
    newMeal.price = incomingMeal.price;

    if (mealToBeUpdatedIndex) {
      mockData.meals.splice(mealToBeUpdatedIndex, 1, newMeal);
    } else {
      return false;
    }
    return newMeal;
  }
}

export default MealService;

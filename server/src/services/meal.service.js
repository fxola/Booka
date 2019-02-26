/* eslint-disable no-param-reassign */
import mockData from '../utils/mockData';
import Meal from '../models/meal.model';

class MealService {
  static fetchAllMeals() {
    const MealList = mockData.meals.map(meal => {
      const mealInstance = new Meal(meal.id, meal.name, meal.description, meal.price);

      return mealInstance;
    });

    return MealList;
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
    if (mealIndex !== -1) {
      return mockData.meals.splice(mealIndex, 1);
    }
    return false;
  }

  static updateMeal(id, incomingMeal) {
    const mealToBeUpdatedIndex = mockData.meals.findIndex(meal => meal.id === parseInt(id, 10));
    const newMeal = new Meal(
      parseInt(id, 10),
      incomingMeal.name,
      incomingMeal.description,
      incomingMeal.price
    );

    if (mealToBeUpdatedIndex !== -1) {
      mockData.meals.splice(mealToBeUpdatedIndex, 1, newMeal);
    } else {
      return false;
    }
    return newMeal;
  }
}

export default MealService;

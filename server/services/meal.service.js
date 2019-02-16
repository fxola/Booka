/* eslint-disable no-param-reassign */
import mockData from '../utils/mockData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeal = mockData.meals.map(meal => {
      const newMeal = new Meal();

      newMeal.id = meal.id;

      newMeal.name = meal.name;

      newMeal.description = meal.description;

      newMeal.price = meal.price;

      return newMeal;
    });

    return validMeal;
  },

  addMeal(meal) {
    const mealLength = mockData.meals.length;
    const lastMealId = mockData.meals[mealLength - 1].id;
    meal.id = lastMealId + 1;
    mockData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const foundMeal = mockData.meals.find(meal => meal.id === parseInt(id, 10));

    return foundMeal || {};
  }
};

export default MealService;

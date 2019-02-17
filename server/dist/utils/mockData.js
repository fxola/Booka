"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  meals: [{
    id: 1,
    name: 'Amala and Ewedu',
    description: 'Tasty and Palatable',
    price: '500'
  }, {
    id: 2,
    name: 'Afang and Fufu',
    description: 'Nutritious and Yummy',
    price: '600'
  }, {
    id: 3,
    name: 'Pounded Yam and Egusi',
    description: 'Nutritious and palatable',
    price: '700'
  }, {
    id: 4,
    name: 'Rice and Beans',
    description: 'Nutritious and palatable',
    price: '400'
  }],
  menu: [{
    id: 100,
    meals: [{
      id: 1,
      name: 'Rice and Beans',
      description: 'Nutritious and palatable',
      price: '400'
    }, {
      id: 2,
      name: 'Pounded Yam and Egusi',
      description: 'Nutritious and palatable',
      price: '400'
    }],
    date: '2019-02-17'
  }, {
    id: 200,
    meals: [{
      id: 1,
      name: 'Amala and Ewedu',
      description: 'Tasty and Palatable',
      price: '500'
    }, {
      id: 2,
      name: 'Afang and Fufu',
      description: 'Nutritious and Yummy',
      price: '600'
    }],
    date: '2019-02-17'
  }],
  orders: [{
    id: 2,
    name: 'John Doe',
    address: 'No 2, Iweka road, Aba',
    orderTotal: '1500',
    phoneNumber: '08012345678',
    mealOrder: [{
      id: 1,
      name: 'Amala and Ewedu',
      description: 'Tasty and Palatable',
      price: '500'
    }, {
      id: 2,
      name: 'Afang and Fufu',
      description: 'Nutritious and Yummy',
      price: '600'
    }]
  }, {
    id: 4,
    name: 'Jane Doe',
    address: 'No 2, Iweka road, Aba',
    orderTotal: '3000',
    phoneNumber: '08012345678',
    mealOrder: [{
      id: 2,
      name: 'Pounded Yam and Egusi',
      description: 'Nutritious and palatable',
      price: '400'
    }, {
      id: 2,
      name: 'Afang and Fufu',
      description: 'Nutritious and Yummy',
      price: '600'
    }]
  }]
};
exports.default = _default;
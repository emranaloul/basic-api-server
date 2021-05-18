'use strict';
const express = require('express');
const Food = require('../models/food.js');
const food = new Food();//object
const router = express.Router();

router.get('/', getFood);
router.get('/:id', getFoodById);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

// controller
function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

function updateFood(req, res) {
  const foodObj = req.body;
  const resObj = food.update(req.params.id, foodObj);
  res.json(resObj);
}

function createFood(req, res) {
  const foodObj = req.body;
  const resObj = food.create(foodObj);
  res.status(201).json(resObj);
}

function getFood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}

function getFoodById(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

module.exports = router;
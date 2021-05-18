'use strict';
const express = require('express');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();//object
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', getClothesById);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

function updateClothes(req, res) {
  const clothesObj = req.body;
  const resObj = clothes.update(req.params.id, clothesObj);
  res.json(resObj);
}

function createClothes(req, res) {
  const clothesObj = req.body;
  const resObj = clothes.create(clothesObj);
  res.status(201).json(resObj);
}

function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClothesById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

module.exports = router;
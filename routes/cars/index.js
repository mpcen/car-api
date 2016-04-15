const cars = require('express').Router()
const all = require('./all');

cars.use('/', all);

module.exports = cars;
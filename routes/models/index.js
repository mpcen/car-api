const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');

models.use('/', all);
models.use('/:modelId', single);
models.use('/:modelId/cars', cars);

module.exports = models;
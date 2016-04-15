const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

routes.use((req, res, next) => {
	console.log(req.method, req.originalUrl);
	next();
});

routes.use('/models', models);
routes.use('/cars', cars);

routes.get('/', (req, res) => {
	res.json({ message: 'Connected!' });
});

module.exports = routes;
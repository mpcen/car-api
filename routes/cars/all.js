const all = require('express').Router();
const Car = require('../../data_models/car');

all.get('/', (req, res) => {
	Car.find((err, cars) => {
		if(err) res.send(err);

		res.json(cars);
	});
});

all.post('/', (req, res) => {
	const car = new Car();
	car.name = req.body.name;
	car.model = req.body.model;

	car.save((err) => {
		if(err) res.send(err);

		res.json({ message: 'Car added!' });
	});
});

module.exports = all;
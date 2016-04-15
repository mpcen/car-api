const cars = require('express').Router({ mergeParams: true });
const Car = require('../../../data_models/car');
const Model = require('../../../data_models/model');

cars.get('/', (req, res) => {
	const modelId = req.params.modelId;
	const model = Model.findById(modelId, (err, model) => {
		if(err) res.send(err);

		Car.find({ model: model.name }, (err, cars) => {
			if(err) res.send(err);

			res.json(cars);
		});
	});	
});

module.exports = cars;
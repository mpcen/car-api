const all = require('express').Router();
const Model = require('../../data_models/model');

all.get('/', (req, res) => {
	Model.find((err, models) => {
		if(err) res.send(err);

		res.json(models);
	});
});

all.post('/', (req, res) => {
	const model = new Model();
	model.name = req.body.name;

	model.save((err) => {
		if(err) res.send(err);

		res.json({ message: 'Model added!' });
	});
});

module.exports = all;
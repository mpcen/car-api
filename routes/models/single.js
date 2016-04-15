const single = require('express').Router({ mergeParams: true });
const Model = require('../../data_models/model');

single.get('/', (req, res) => {
	Model.findById(req.params.modelId, (err, model) => {
		if(err) res.send(err);

		res.json(model);
	});
});

single.put('/', (req, res) => {
	Model.findById(req.params.modelId, (err, model) => {
		if(err) res.send(err);

		model.name = req.body.name;

		model.save((err) => {
			if(err) res.send(err);

			res.json({ message: 'Model updated!' });
		});
	});
});

single.delete('/', (req, res) => {
	Model.remove({_id: req.params.modelId}, (err) => {
		if(err) res.send(err);

		res.json({ message: 'Model deleted!' });
	});
});

module.exports = single;
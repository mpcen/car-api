const app = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/car-api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
	console.log('App listening on port 3000');
});
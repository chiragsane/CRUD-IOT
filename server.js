var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IOT_Data');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: 'API connected sucessfully!' });
});
app.get('/api', (req, res) => {
    res.json({ message: 'API connected sucessfully!' });
});
app.use('/api/samples', require('./routes/samples'));

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App started on ${port}`);
});
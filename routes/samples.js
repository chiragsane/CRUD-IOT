var express = require('express');
var router = express.Router();

var moment = require('moment');

var Sample = require('../models/sample');

router.use((req, res, next) => {
    console.log('Someone hit api/sample');
    next();
});

router.route('/')
    .get((req, res) => {
        Sample.find((err, samples) => {
            if (err)
                res.send(err);
            res.json(samples);
        });
    })
    .post((req, res) => {
        var sample = new Sample();
        sample.DateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        sample.Temperature = Math.round(Math.random() * 100) / 10 + 25;
        sample.Current = Math.round(Math.random() * 100) / 10;
        sample.Voltage = Math.round(Math.random() * 100) / 10 + 100;
        sample.save((err) => {
            if (err)
                res.send(err);
            res.json({ reply: 'Sample created!' });
        });
    });

router.route('/:id')
    .delete((req, res) => {
        Sample.remove({
            _id: req.params.id
        }, (err, user) => {
            if (err)
                res.send(err);
            res.json({ reply: 'Sample deleted' });
        });
    });

module.exports = router;
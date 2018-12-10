const express = require('express'),
    bps = require('body-parser'),
    morgan = require('morgan'),
    api = require('../api/v1/api.js'),
    app = express();

app.use(bps.json());
app.use(bps.urlencoded({ extended: true}));

app.use(morgan('dev'));

app.use('/api/v1', api);

module.exports = app;


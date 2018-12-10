const express = require('express');
    api = express.Router();
    userRoute = require('./users/user_router');

api.use('/user', userRoute);

module.exports = api;
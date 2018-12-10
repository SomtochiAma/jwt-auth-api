const express = require('express');
const router = express.Router();
const controller = require('./user_controller');

router.route('/signup')
        .post(controller.saveUser);

module.exports = router;
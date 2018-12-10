const express = require('express'),
        router = express.Router();
        controller = require('./user_controller');
        auth = require('./auth/auth')


router.route('/')
        .get(auth.validateToken, controller.mainRoute )

router.route('/signup')
        .post(controller.saveUser);

router.route('/signin')
        .post(controller.loginUser, controller.authUser);


module.exports = router;
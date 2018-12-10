const userModel = require('./user_model');
const auth = require('./auth/auth');

exports.saveUser = (req, res, next) => {
    userModel.checkIfUserExists(req.body.email, function(err, result) {
        if(result) {
            res.status(500).json({
                message: "Email exists"
            })
        } else {
            const user = new userModel({
                email: req.body.email,
                password: req.body.password,
            })
            userModel.saveUser(user, function(err, result) {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                res.status(201).json( {
                    data: result,
                });
            })
        }
    })
    next();
}

exports.loginUser = (req, res, next) => {
    userModel.checkIfUserExists(req.body.email, function(err, result) {
        if(err) {
            console.log(err);
        } 
        if (result) {
            userModel.comparePassword(req.body.password, result.password, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    req.user = result;
                    next();
                }
            })
        } else {
            res.status(401).json({
                'failed': "Invalid Credentials",
            })
        }
        
    })
}

exports.authUser = (req, res, next) => {
    var token = auth.signToken(req.user._id);

    res.status(200).json({
        '_token': token,
    })
}

exports.mainRoute = (req, res, next) => {
    res.status(200).json({
        'success': 'Logged In '
    })
}
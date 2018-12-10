const userModel = require('./user_model');

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
                res.status(200).json( {
                    data: result,
                });
            })
        }
    })
}
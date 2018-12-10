const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

mongoose.connect('mongodb://localhost/jwtauth', {
    useNewUrlParser : true,
});
mongoose.Promise = global.Promise;

db = mongoose.connection;

db.on('connected', () => console.log('Sucessfully connected to the db'));
db.on('err', (err) => console.log(`Oopsies :(, An Error: ${err}`));

const userSchema = new Schema({
    email: { type: String },
    password: { type: String }
});

let User = module.exports = mongoose.model('User', userSchema);

module.exports.checkIfUserExists = (userEmail, callback) => {
    User.findOne({ email: userEmail}, callback);
}

module.exports.saveUser = (newUser, callback) => {
    bcrypt.hash(newUser.password, null, null, function(err, hash) {
        if(err) {
            console.log(`Error : ${err}`)
        } else {
            newUser.password = hash;
            newUser.save(callback);
        }
    })
}

module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, callback)
}




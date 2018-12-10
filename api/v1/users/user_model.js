const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const bc

mongoose.connect('mongodb://localhost/jwtauth', {
    useNewUrlParser : true,
});
mongoose.Promise = global.Promise;

db = mongoose.connection;

db.on('connected', () => console.log('Sucessfully connected to the db'));
db.on('err', (err) => console.log(`Oopsies :(, An Error: ${err}`));

const userSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    email: { type: String },
    password: { type: String }
})




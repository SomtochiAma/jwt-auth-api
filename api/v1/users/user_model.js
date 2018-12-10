const mongoose = require('mongoose');
const Schema= mongoose.Schema;

mongoose.connect('mongodb://localhost/jwtauth', {
    useNewUrlParser : true,
});
mongoose.Promise = global.Promise;

db = mongoose.connection;

db.on('connected', () => console.log('Sucessfully connected to the db'));
db.on('err', (err) => console.log(`Oopsies :(, An Error: ${err}`));




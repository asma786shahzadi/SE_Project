const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Failed to connect with db');
});
db.once('open', () => {
    console.log('Connected to db')
});

module.exports = { db };
const {User} = require('../../models/user')
const logs = require('../logs');

async function ViewUser(req, res) {
    try {
        const product = await User.find();
        res.status(200).json(product);
    } catch (error) {
        logs.Log(error.message, 'Admin', '/viewuser');
        console.error('Error while finding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewUser};
const {User} = require('../../models/user')
const logs = require('../logs');

async function ViewUser(req, res) {
    try {
        const cart = await User.find();
        res.status(200).json(cart);
    } catch (error) {
        logs.Log(error.message, 'User', '/viewuser');
        console.error('Error while finding users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewUser};
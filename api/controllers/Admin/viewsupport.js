const {Support} = require('../../models/support')
const logs = require('../logs');

async function ViewSupport(req, res) {
    try {
        const support = await Support.find();
        res.status(200).json(support);
    } catch (error) {
        logs.Log(error.message, 'Admin', '/viewsupport');
        console.error('Error while finding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewSupport};
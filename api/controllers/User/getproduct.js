const {Buy} = require('../../models/buy')
const logs = require('../logs');

async function GetProduct(req, res) {
    try {
        const buyproduct = await Buy.find();
        res.status(200).json(buyproduct);
    } catch (error) {
        logs.Log(error.message, 'User', '/getproduct');
        console.error('Error while finding Bought product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {GetProduct};
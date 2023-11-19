const {Cart} = require('../../models/cart')
const logs = require('../logs');

async function ViewCart(req, res) {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (error) {
        logs.Log(error.message, 'User', '/viewcart');
        console.error('Error while finding cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewCart};
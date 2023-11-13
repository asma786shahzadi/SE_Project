const {Product} = require('../../models/product')
const logs = require('../logs');

async function ViewProduct(req, res) {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        logs.Log(error.message, 'Admin', '/viewproduct');
        console.error('Error while finding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewProduct};
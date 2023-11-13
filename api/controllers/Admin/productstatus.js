const { Product } = require('../../models/product');
const logs = require('../logs');

async function StatusProduct(req, res) {
    try {
        const id = req.query.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        console.log(updatedProduct);
        res.status(200).json(updatedProduct);
    } catch (err) {
        logs.Log(err.message, 'Admin', '/productstatus');
        res.status(500).json({ error: err.message });
    }
};

module.exports = { StatusProduct }
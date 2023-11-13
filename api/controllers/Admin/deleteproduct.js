const {Product} = require('../../models/product')
const logs = require('../logs');

  async function DeleteProduct(req, res) {
    try {
      const Id = req.params.id;
      console.log(Id);
      const deletedProduct = await Product.findByIdAndDelete(Id);
      const responseData = { message: 'deleted' };
      res.status(200).json(responseData);
    } catch (err) {
      logs.Log(err.message, 'Admin', '/deleteproduct');
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = {DeleteProduct};
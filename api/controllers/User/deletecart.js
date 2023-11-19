const {Cart} = require('../../models/cart')
const logs = require('../logs');

  async function DeleteCart(req, res) {
    try {
      const ProductId = req.query.productId;
      const UserId = req.query.userId;
      const deletedCart = await Cart.findOneAndDelete({ productId: ProductId, userId: UserId });
      const responseData = { message: 'deleted' };
      res.status(200).json(responseData);
    } catch (err) {
      logs.Log(err.message, 'User', '/deletecart');
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = {DeleteCart};
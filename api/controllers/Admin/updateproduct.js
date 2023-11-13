const {Product} = require('../../models/product')
const logs = require('../logs');
const strftime = require('strftime');

async function UpdateProduct(req, res) {
    // try {
      const id = req.query.id;
      const name = req.body.name
      const description = req.body.description
      const price = req.body.price
      const category = req.body.category
      const size = req.body.size
      const image = req.file.filename;
      const quantity = req.body.quantity;
      const now = new Date();
      const dateupdated = strftime('%Y-%m-%d %H:%M:%S', now);
      var data={
          name:name,
          description:description,
          price:price,
          category:category,
          size:size,
          availabilityStatus:true,
          quantity:quantity,
          updated_at:dateupdated,
      }
      console.log(data);
      console.log(req.file)
      if (req.file !== null) {
        data.image = req.file.filename;
      }
      console.log(data);

      const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
      console.log(updatedProduct)
      res.status(200).json(updatedProduct);
    // } catch (err) {
    //   logs.Log(err.message, 'Admin', '/updateproduct');
    //   res.status(500).json({ error: err.message });
    // }
  }

  module.exports = {UpdateProduct};
const { db } = require("../../utils/connect");
const { Cart } = require("../../models/cart");
const { Product } = require("../../models/product");
const logs = require('../logs');
const strftime = require('strftime');

async function Bought(req, response) {
    try {
        const id = req.query.productId
        const name = req.query.productName
        const description = req.query.productDescription
        const price = req.query.productPrice
        const address = req.query.userAddress
        const email = req.query.userId
        const size = req.query.productSize
        const image = req.query.productImage
        const quantity = req.query.productQuantity
        const now = new Date();
        const created_at = strftime('%Y-%m-%d %H:%M:%S', now);
        var data = {
            "productId": id,
            "userId": email,
            "userAddress": address,
            "productName": name,
            "ProductImage": image,
            "productDescription": description,
            "productPrice": price,
            "productSize": size,
            "productQuantity": quantity,
            "created_at": created_at,
            "updated_at": created_at,
        }

        db.collection('buys').insertOne(data, async (error, result) => {
            if (error) {
                logs.Log(error.message, 'User', '/bought');
                console.log(error);
                return response.status(500).json({ error: 'Internal Server Error' });
            }
            else {
                const deletedCart = await Cart.findOneAndDelete({ productId: id, userId: email });
                if (!deletedCart) {
                    console.log("Data Not Deleted / Cart is Empty");
                }
                else {
                    const existingProduct = await Product.findById(id);
                    console.log("Existing Product:", existingProduct);

                    const updateProduct = await Product.findByIdAndUpdate({ _id: id },   { $set: { quantity: existingProduct.quantity - quantity } }, { new: true });
                    if (!updateProduct) {
                        console.log("Product not found or not updated");
                    }
                    else {
                        response.redirect("http://localhost:3000/success");
                    }
                }
            }
        })
    }
    catch (e) {
        logs.Log(e.message, 'User', '/bought');
        response.status(500).json({ error: e.message });
    }
}

module.exports = {
    Bought,
};

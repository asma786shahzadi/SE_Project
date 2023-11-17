var { db } = require('../../utils/connect');
const logs = require('../logs');
const strftime = require('strftime');

async function AddCart(req, res) {
    try {
        const id = req.body.ProductId
        const name = req.body.ProductName
        const description = req.body.ProductDescription
        const price = req.body.ProductPrice
        const email = req.body.UserEmail
        const size = req.body.ProductSize
        const image = req.body.ProductImage;
        const now = new Date();
        const created_at = strftime('%Y-%m-%d %H:%M:%S', now);
        var data={
            "productId":id,
            "userId":email,
            "productName":name,
            "ProductImage":image,
            "productDescription":description,
            "productPrice":price,
            "productSize":size,
            "created_at":created_at,
            "updated_at":created_at
        }
        console.log('data', data)
        db.collection('carts').insertOne(data, (err, result) => {
            if (err) {
                logs.Log(err.message, 'User', '/addcart');
                console.log(err);
            }
            else {
                const responseData = { message: 'added' };
                res.status(200).json(responseData);
            }
        })
    }
    catch (e) {
        logs.Log(e.message, 'User', '/addcart');
        res.status(500).json({ error: e.message });
    }
};

module.exports = {AddCart};
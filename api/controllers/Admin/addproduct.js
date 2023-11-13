var { db } = require('../../utils/connect');
const logs = require('../logs');
const strftime = require('strftime');

async function AddProduct(req, res) {
    try {
        const name = req.body.name
        const description = req.body.description
        const price = req.body.price
        const category = req.body.category
        const size = req.body.size
        const image = req.file.filename;
        const quantity = req.body.quantity;
        const now = new Date();
        const dateCreated = strftime('%Y-%m-%d %H:%M:%S', now);
        var data={
            "name":name,
            "image":image,
            "description":description,
            "price":price,
            "category":category,
            "size":size,
            "availabilityStatus":true,
            "quantity":quantity,
            "created_at":dateCreated,
            "updated_at":dateCreated,
        }
        console.log('data', data)
        db.collection('products').insertOne(data, (err, result) => {
            if (err) {
                console.log(err);
                logs.Log(err.message, 'Admin', '/addproduct');
            }
            else {
                const responseData = { message: 'added' };
                res.status(200).json(responseData);
            }
        })
    }
    catch (e) {
        logs.Log(e.message, 'Admin', '/addproduct');
        res.status(500).json({ error: e.message });
    }
};

module.exports = {AddProduct};
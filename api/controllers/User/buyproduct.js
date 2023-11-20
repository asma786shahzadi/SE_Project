var { db } = require('../../utils/connect');
const stripe = require("stripe")(process.env.Stripe_Key);
const { Product } = require('../../models/product');
const logs = require('../logs');

async function BuyProduct(req, res) {
    // try {
    const id = req.body.productId
    const name = req.body.productName
    const description = req.body.productDescription
    const price = req.body.productPrice
    const address = req.body.userAddress
    const email = req.body.userId
    const size = req.body.productSize
    const image = req.body.productImage;
    const quantity = req.body.productQuantity;
    var data = {
        "productId": id,
        "userId": email,
        "userAddress": address,
        "productName": name,
        "ProductImage": image,
        "productDescription": description,
        "productPrice": price,
        "productSize": size,
        "productQuantity": quantity
    }
    console.log('data', data)
    const product = await Product.find();
    console.log("Whole Data :", product)
    const filteredData = product.filter((item) => item._id.toString() === id.toString());
    console.log("Fitered Data :", filteredData);
    console.log(filteredData[0]);
    console.log("Json")
    console.log("quantity :" , filteredData[0].quantity)
    console.log(quantity)
    if (filteredData[0].quantity - quantity > 0) {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "pkr",
                        product_data: {
                            name: name,
                            // images: [`http://localhost:4000/images/${image}`],
                            images: [`https://4e4d-111-68-102-25.ngrok.io/images/${image}`],
                        },
                        unit_amount: price * 100,
                    },
                    quantity: quantity,
                },
            ],
            mode: "payment",
            success_url: `http://localhost:4000/bought?session_id={CHECKOUT_SESSION_ID}&productId=${id}&productName=${name}&productDescription=${description}&productPrice=${price}&userAddress=${address}&userId=${email}&productSize=${size}&productImage=${image}&productQuantity=${quantity}`,
            cancel_url: "http://localhost:3000/cancel",
        });
        console.log("Session Response:", session);
        res.status(200).json({ sessionUrl: session.url });
    }
    else {
        res.status(200).json({ message: "outofstock" });
    }
    // }
    // catch (e) {
    //     logs.Log(e.message, 'User', '/buyproduct');
    //     res.status(500).json({ error: e.message });
    // }
};

module.exports = { BuyProduct };
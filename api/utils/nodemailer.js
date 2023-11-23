const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'munirsaad750@gmail.com',
        pass: 'ndiatbawhnodfnbv'
    }
});
module.exports={transporter}
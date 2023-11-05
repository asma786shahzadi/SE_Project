const crypto = require('crypto');
var { db } = require('../utils/connect');
const logs = require('./logs');
const strftime = require('strftime');

async function Register(req, response) {
    try {
        const name = req.body.Name;
        const username = req.body.Username;
        const email = req.body.Email;
        const address = req.body.Address;
        const password = crypto.createHash('sha256').update(req.body.Password).digest('hex');
        const role = "User";
        const now = new Date();
        const dateCreated = strftime('%Y-%m-%d %H:%M:%S', now);
        var data = {
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "address": address,
            "role": role,
            "active": true,
            "created_at": dateCreated,
            "updated_at": dateCreated,
        }
        console.log(data);
        db.collection('users').insertOne(data, (err, collection) => {
            if (err) {
                logs.Log(err, 'General', '/register');
                console.log(err);
            }
            else {
                const responseData = { message: 'added' };
                response.status(200).json(responseData);
            }
        })
    }
    catch (e) {
        logs.Log(e.message, 'General', '/register');
        response.status(500).json({ error: e.message });
    }
}

module.exports = { Register }
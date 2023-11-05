const crypto = require('crypto');
var { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const logs = require('./logs');

const secretKey = '123asdqwe123qwe123098poi098asd';
const customerSecretKey = 'qweqwepoipoi098123098123poiqwe';

function generateToken(user, Role) {
  console.log(user.role);
  const payload = {
    Role: user.role,
    id: user._id,
  };
  if (Role == "Admin") {
    return jwt.sign(payload, secretKey);
  }
  else if (Role == "User") {
    return jwt.sign(payload, customerSecretKey);
  }
}



async function Login(req, res) {
  try {
    const email = req.body.Email;
    const password = crypto.createHash('sha256').update(req.body.Password).digest('hex');
    console.log(email, password);
    // "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
    async function check() {
      const user = await User.find({ email: email });
      if (user && password == user[0].password && user[0].active == true && user[0].role == 'User') {
        const token = generateToken(user[0], user[0].role);
        res.status(200).json({ message: 'Login successful', token: token });
      }
      else if (user && password == user[0].password && user[0].active == true && user[0].role == 'Admin') {
        const token = generateToken(user[0], user[0].role);
        res.status(200).json({ message: 'Login Admin successful', token: token });
      }
      else {
        logs.Log('Invalid credentials', 'General', '/login');
        res.status(401).json({ error: 'Invalid credentials', message: 'Invalid credentials' });
      }
    }
    check();
  }
  catch (error) {
    logs.Log(error.message, 'General', '/login');
    console.error('Error while finding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { Login };
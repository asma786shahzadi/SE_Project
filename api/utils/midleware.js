const jwt = require('jsonwebtoken');

const secretKey = '123asdqwe123qwe123098poi098asd';
const customerSecretKey = 'qweqwepoipoi098123098123poiqwe';

function authenticateToken(req, res, next) {
    const token = req.headers.authorization;
    const role = req.headers.role;
    console.log(role);
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    if (role == "Admin") {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ message: 'Forbidden' });
            }
            else {
                return res.status(201).json({ message: 'verifiedadmin' });
            }
        });
    }
    else if (role == "User") {
        jwt.verify(token, customerSecretKey, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ message: 'Forbidden' });
            }
            else {
                return res.status(201).json({ message: 'verified' });
            }
        });
    }
}

function authorizeRole(allowedRoles) {
    // return (req, res, next) => {
    //     const userRole = req.body.role; 
    //     if (allowedRoles.includes(userRole)) {
    //          next();
    //         } else {
    //          res.status(403).json({ message: 'Permission denied' });
    //         }
    //     };
}

module.exports = {
    authenticateToken,
    authorizeRole,
};
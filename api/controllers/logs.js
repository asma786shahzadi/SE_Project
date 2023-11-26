const { db } = require("../utils/connect");

async function Log(message, portal, route) {
    const logEntry = {
        ErrorMessage: message,
        Portal: portal,
        Route: route
    };

    db.collection('logbackends').insertOne(logEntry, (err, collection) => {
        if (err) {
            throw err;
        }
        else {
        }
    })
}

module.exports = {
    Log,
};
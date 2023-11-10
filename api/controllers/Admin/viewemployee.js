const {Employee} = require('../../models/employee')
const logs = require('../logs');

async function ViewEmployee(req, res) {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        logs.Log(error.message, 'Admin', '/viewemployee');
        console.error('Error while finding employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {ViewEmployee};
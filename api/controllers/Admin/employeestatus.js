const { Employee } = require('../../models/employee');
const logs = require('../logs');

async function StatusEmployee(req, res) {
    try {
        const id = req.query.id;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        console.log(updatedEmployee);
        res.status(200).json(updatedEmployee);
    } catch (err) {
        logs.Log(err.message, 'Admin', '/employeestatus');
        res.status(500).json({ error: err.message });
    }
};

module.exports = { StatusEmployee }
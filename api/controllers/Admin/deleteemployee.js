const { Employee } = require('../../models/employee')
const logs = require('../logs');
const { db } = require('../../utils/connect')
const strftime = require('strftime');

async function DeleteEmployee(req, res) {
  try {
    const Id = req.params.id;
    console.log(Id);
    const olddata = await Employee.findById(Id);
    var audit = {
      "userId": "65639ca25235e513b22c69aa",
      "action": "Delete",
      "oldValue": olddata,
      "newValue": null,
      "dateCreated": strftime('%Y-%m-%d %H:%M:%S', new Date()),
    }
    db.collection('auditemployees').insertOne(audit, (err, result) => {
      if (err) {
        console.log(err);
        logs.Log(err.message, 'Admin', '/deleteemployee');
      }
      else {
        console.log('audit added');
      }
    })
    const deletedEmployee = await Employee.findByIdAndDelete(Id);
    const responseData = { message: 'deleted' };
    res.status(200).json(responseData);
  } catch (err) {
    logs.Log(err.message, 'Admin', '/deleteemployee');
    res.status(500).json({ error: err.message });
  }
}

module.exports = { DeleteEmployee };
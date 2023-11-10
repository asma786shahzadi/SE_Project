const { Employee } = require('../../models/employee');
const logs = require('../logs');
const strftime = require('strftime');
const {db} = require('../../utils/connect');

async function UpdateEmployee(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const cnic = req.body.cnic;
    const salary = req.body.salary;
    const role = req.body.role;
    const active = true;
    const id = req.query.id;
    const now = new Date();
    const updated_at = strftime('%Y-%m-%d %H:%M:%S', now);

    let data = {
      name: name,
      email: email,
      contact: contact,
      cnic: cnic,
      salary: salary,
      role: role,
      active: active,
      updated_at: updated_at,
    };

    console.log('Before update:', id, data);

    if (req.file !== null) {
      data.image = req.file.filename;
    }

    console.log('Data after file check:', data);
    const oldemployee = await Employee.findById(id).exec();

    console.log('Before update:', oldemployee);

    const updatedEmployee = await Employee.findByIdAndUpdate(id, data, { new: true }).exec();

    console.log('After update:', updatedEmployee);

    // Your audit code here
    const audit = {
      userId: '65639ca25235e513b22c69aa',
      action: 'Update',
      oldValue: oldemployee._doc, // Use _doc to get plain object from Mongoose document
      newValue: updatedEmployee._doc, // Use _doc to get plain object from Mongoose document
      dateCreated: strftime('%Y-%m-%d %H:%M:%S', new Date()),
    };

    await db.collection('auditemployees').insertOne(audit);

    console.log('Audit added:', audit);

    res.status(200).json(updatedEmployee);
  } catch (e) {
    console.log('Update employee error:', e);
    logs.Log(e.message, 'Admin', '/updateemployee');
    res.status(500).json({ error: e.message });
  }
}

module.exports = { UpdateEmployee };

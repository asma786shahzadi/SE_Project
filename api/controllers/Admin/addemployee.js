var { db } = require('../../utils/connect');
const logs = require("../logs");
const strftime = require('strftime');

async function AddEmployee(req, res) {
    try {
        const name = req.body.name
        const email = req.body.email
        const contact = req.body.contact
        const cnic = req.body.cnic
        const salary = req.body.salary
        const role = req.body.role
        const image = req.file.filename;
        const now = new Date();
        const created_at = strftime('%Y-%m-%d %H:%M:%S', now);
        const active = true
        var data = {
            "name": name,
            "image": image,
            "email": email,
            "contact": contact,
            "cnic": cnic,
            "salary": salary,
            "role": role,
            "active": active,
            "created_at": created_at,
            "updated_at": created_at,
        }
        console.log('data', data)
        db.collection('employees').insertOne(data, (err, result) => {
            if (err) {
                console.log(err);
                logs.Log(err.message, 'Admin', '/addemployee');
            }
            else {
                var audit = {
                    "userId": "65639ca25235e513b22c69aa",
                    "action": "Insert",
                    "oldValue": null,
                    "newValue": data,
                    "dateCreated": strftime('%Y-%m-%d %H:%M:%S', new Date()),
                }
                db.collection('auditemployees').insertOne(audit, (err, result) => {
                    if (err) {
                        console.log(err);
                        logs.Log(err.message, 'Admin', '/addemployee');
                    }
                    else {
                        console.log('audit added');
                    }
                })
                const responseData = { message: 'added' };
                res.status(200).json(responseData);
            }
        })
    } catch (e) {
        logs.Log(e.message, 'Admin', '/addemployee');
        res.status(500).json({ error: e.message });
    }
};

module.exports = { AddEmployee };
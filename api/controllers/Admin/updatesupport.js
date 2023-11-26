const { Support } = require('../../models/support');
const logs = require('../logs');
const emailer = require('./sendEmail');

async function UpdateSupport(req, res) {
    try {
        const id = req.query.id;
        const email = req.query.email;
        const answer = req.query.answer;
        const subject = req.query.subject;
        const question = req.query.question;
        console.log(req.body);

        const updatedsupport = await Support.findByIdAndUpdate(id, { isReplied: true }, { new: true });
        async function emailsend() {
            const body = `<p>Dear User!</p><p> Thanks for contacting our support Team in E-CAFE.</p><br/> Your Question :${question} <br/> Answer: ${answer} <br/> <p>Thanks & Regards</p><p>E-CAFE</p>`;
            const responseData = await emailer.sendEmail(email, subject, body);
            console.log(updatedsupport);
            res.status(200).json({ updatedsupport, message: 'Support Replied' });
        }
        await emailsend();
    } catch (error) {
        logs.Log(error.message, 'Admin', '/updatesupport');
        res.status(500).json({ error: error.message });
    }
}

module.exports = { UpdateSupport };

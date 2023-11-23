var {db} = require('../../utils/connect')
var logs = require('../logs')

async function Support(req,res){
    try{
        const name = req.body.name
        const email = req.body.email
        const subject = req.body.subject;
        const message = req.body.message
        const isReplied = "false"
        var data={
            "userName":name,
            "userEmail":email,
            "subject":subject,
            "message":message,
            "isReplied":isReplied,
        }
        console.log('data', data)
        db.collection('supports').insertOne(data,(err,result)=>{
            if(err){
                logs.Log(err.message,'User','/support')
                console.log(err)
            }
            else{
                const responseData = {message:'success'};
                res.status(200).json(responseData);
            }
        })
    }
    catch(e){
        logs.Log(e.message,'User','/support')
        res.status(500).json({error:e.message})
    }
};

module.exports = {Support};
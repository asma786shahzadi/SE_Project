const mongoose=require('mongoose')

const AuditProduct=mongoose.model('auditproducts',{
    userId:{
        type:String,
        required:true,
    },
    action:{
        type:String,
        required:true,
    },
    oldValue:{
        type:String,
        required:true,
    },
    newValue:{
        type:Number,
        required:true,
    },
    dateCreated:{
        type:Date,
        required:true,
    },
})

module.exports={AuditProduct}
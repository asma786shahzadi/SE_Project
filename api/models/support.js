const mongoose=require('mongoose')

const Support=mongoose.model('supports',{
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    isReplied:{
        type:String,
        required:true,
    },
}
)

module.exports={Support}
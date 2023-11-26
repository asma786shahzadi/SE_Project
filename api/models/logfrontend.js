const mongoose=require('mongoose')

const FrontLog=mongoose.model('logfrontends',{
    ErrorMessage:{
        type:String,
        required:true,
    },
    Portal:{
        type:String,
        required:true,
    },
    Route:{
        type:String,
        required:true,
    },
})

module.exports={FrontLog}
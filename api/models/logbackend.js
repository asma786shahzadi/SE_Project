const mongoose=require('mongoose')

const BackLog=mongoose.model('logbackends',{
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

module.exports={BackLog}
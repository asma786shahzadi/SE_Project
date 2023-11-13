const mongoose=require('mongoose')

const Product=mongoose.model('products',{
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    availabilityStatus:{
        type:Boolean,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    created_at: {
        type: Date,
        required: true,
    },
    updated_at: {
        type: Date,
        required: true,
    }
}
)

module.exports={Product}
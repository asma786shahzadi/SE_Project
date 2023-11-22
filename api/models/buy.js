const mongoose=require('mongoose')

const Buy=mongoose.model('buys',{
    productId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    userAddress:{
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    ProductImage:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productSize:{
        type:String,
        required:true,
    },
    productQuantity:{
        type:String,
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

module.exports={Buy}
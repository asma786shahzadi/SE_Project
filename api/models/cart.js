const mongoose=require('mongoose')

const Cart=mongoose.model('carts',{
    productId:{
        type:String,
        required:true,
    },
    userId:{
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

module.exports={Cart}
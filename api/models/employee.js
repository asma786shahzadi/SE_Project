const mongoose=require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    cnic:{
        type:Number,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    active:{
        type:Boolean,
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

const Employee = mongoose.model('employees', employeeSchema);

module.exports = { Employee };
const mongoose= require('mongoose')

const Items=mongoose.model('Items',{
    itemName :{
        type:String,
        trim:true,
        required:true
    },
    itemDescription:{
        type:String,
    },
    companyName:{
        type : String,
        required:true
    },
    address : {
        type :String,
        required:true
    },
    state :{
        type :String,
        required:true
    },
    emailId :{
        type :String
    },
    
    pincode : {
        type: Number,
        required:true
    },
    contactNo : {
        type: Number,
        required:true
    },
    mfd :{
        type: Date,
        required:true
    },
    price :{
        type:Number,
        required:true
    }

})

module.exports = Items

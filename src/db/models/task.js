// const mongoose= require('mongoose')

// const Tasks=mongoose.model('Tasks',{
//     description :{
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// module.exports = Tasks


//Applying Authentication and Security in Task so that only the Login User can see,update or delete the task


//applying concept so that task stored the id of user
// const mongoose= require('mongoose')

// const Tasks=mongoose.model('Tasks',{
//     description :{
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     owner :{
//         type : mongoose.Schema.Types.ObjectId,
//         required :true
//     }
// })

// module.exports = Tasks

//Using some features of Mongoose for referencing one table to another
// const mongoose= require('mongoose')

// const Tasks=mongoose.model('Tasks',{
//     description :{
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     owner :{
//         type : mongoose.Schema.Types.ObjectId,
//         required :true,
//         //using some feature of mongoose
//         ref :'User'  // this name is should be same as the User Model name in Schema methods
//     }
// })

// module.exports = Tasks


////Applying timestamps, Filtering sorting and Pagination
const mongoose= require('mongoose')

const taskSchema = new mongoose.Schema({
    description :{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        required :true,
        //using some feature of mongoose
        ref :'User'  // this name is should be same as the User Model name in Schema methods
    }
},
//applying time stamp in Models
    {
        timestamps :true
})

const Tasks=mongoose.model('Tasks',taskSchema)

module.exports = Tasks

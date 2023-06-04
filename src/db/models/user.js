// const mongoose=require('mongoose')
// const validator=require('validator')


// const User=mongoose.model('User',{
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })


// module.exports=User


//Applying Securely storing Password
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })

// // the below code is for running the middle ware consistently
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User



// setting up the sign up  schema

// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User



//using JSON Web Token 
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })

// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')
//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User


//setting up the JSON Auth TToken for different devices for user so that he or she can login from different devices
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// })

// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User



//Using Express Middle Ware for authentication

//with Express MiddleWare only
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// })

// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User



//Hiding private data like password even when user is login
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// })

// //method for show only public data and hiding private data
// // userSchema.methods.getPublicProfile = function (){

// //     const user = this

// //     const userObject = user.toObject()

// //     delete userObject.password
// //     delete userObject.tokens

// //     return userObject
// // }

// //we can do the above method  in the same way as shown below 
// userSchema.methods.toJSON = function (){

//     const user = this

//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens

//     return userObject
// }



// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User


//code refactoring and also using auth token in delete and update

// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// })

// //method for show only public data and hiding private data
// // userSchema.methods.getPublicProfile = function (){

// //     const user = this

// //     const userObject = user.toObject()

// //     delete userObject.password
// //     delete userObject.tokens

// //     return userObject
// // }

// //we can do the above method  in the same way as shown below 
// userSchema.methods.toJSON = function (){

//     const user = this

//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens

//     return userObject
// }



// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// const User=mongoose.model('User', userSchema)


// module.exports=User

// to finding the task using user id
// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const Task = require('../models/task')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// },{
//     timestamps : true
// })

// // for finding the the task using user id we set up a virtual collection in user for that
// userSchema.virtual('tasks',{
//     ref :'Tasks', //The model name shoul be same if not it shows the error
//     localField: '_id',
//     foreignField: 'owner'
// })


// //there was some method getPulic...

// //we can do the above method  in the same way as shown below 
// userSchema.methods.toJSON = function (){

//     const user = this

//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens

//     return userObject
// }


// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// // Delete User Task when user is Deleted

// userSchema.pre('remove', async function (next){
//     const user = this 
//     await Task.deleteMany({ owner : user._id })
//     next()
// })

// const User=mongoose.model('User', userSchema)


// module.exports=User




//Applying timestamps, Filtering sorting and Pagination

// const mongoose=require('mongoose')
// const validator=require('validator')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const Task = require('../models/task')

// const userSchema = new mongoose.Schema({
//     name :{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         unique : true,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     password:{
//         type : String,
//         required:true,
//         minLength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     },
//     tokens : [{
//         token : {
//             type :String,
//             required : true
//         }
//     }]
// },
// //applying time stamp in Models
// {
//     timestamps : true
// })

// // for finding the the task using user id we set up a virtual collection in user for that
// userSchema.virtual('tasks',{
//     ref :'Tasks', //The model name shoul be same if not it shows the error
//     localField: '_id',
//     foreignField: 'owner'
// })


// //there was some method getPulic...

// //we can do the above method  in the same way as shown below 
// userSchema.methods.toJSON = function (){

//     const user = this

//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens

//     return userObject
// }


// //genarating Auth Token
// userSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

//     user.tokens = user.tokens.concat({ token })
//     user.save()

//     return token


// }


// //checking the user is valid user or not
// userSchema.statics.findByCredentials = async (email , password) =>{
//     const user = await User.findOne({ email })

//     if (!user){
//         throw new Error('Unable to find the User')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//        throw new Error ('Unable to login ') 
//     }

//     return user
// }

// //Hash plain text password before saving 
// userSchema.pre('save',async function(next){
//     const user= this;

//     //console.log('just before Saving');

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,8)
//     }

//     next()

// })

// // Delete User Task when user is Deleted

// userSchema.pre('remove', async function (next){
//     const user = this 
//     await Task.deleteMany({ owner : user._id })
//     next()
// })

// const User=mongoose.model('User', userSchema)


// module.exports=User


//Adding Authentication and linking the information who upload which image

const mongoose=require('mongoose')
const validator=require('validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('../models/task')

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique : true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is in valid');
            }
        }
    },
    password:{
        type : String,
        required:true,
        minLength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be +ve No.')
            }
        }
    },
    tokens : [{
        token : {
            type :String,
            required : true
        }
    }], 
    avatar :{
        type : Buffer
    }
},
//applying time stamp in Models
{
    timestamps : true
})

// for finding the the task using user id we set up a virtual collection in user for that
userSchema.virtual('tasks',{
    ref :'Tasks', //The model name shoul be same if not it shows the error
    localField: '_id',
    foreignField: 'owner'
})


//there was some method getPulic...

//we can do the above method  in the same way as shown below 
userSchema.methods.toJSON = function (){

    const user = this

    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}


//genarating Auth Token
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id : user._id.toString() }, 'thisIsMyNewToken')

    user.tokens = user.tokens.concat({ token })
    user.save()

    return token


}


//checking the user is valid user or not
userSchema.statics.findByCredentials = async (email , password) =>{
    const user = await User.findOne({ email })

    if (!user){
        throw new Error('Unable to find the User')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
       throw new Error ('Unable to login ') 
    }

    return user
}

//Hash plain text password before saving 
userSchema.pre('save',async function(next){
    const user= this;

    //console.log('just before Saving');

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()

})

// Delete User Task when user is Deleted

userSchema.pre('remove', async function (next){
    const user = this 
    await Task.deleteMany({ owner : user._id })
    next()
})

const User=mongoose.model('User', userSchema)


module.exports=User

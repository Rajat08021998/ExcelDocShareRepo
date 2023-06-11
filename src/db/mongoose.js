// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

// const User=mongoose.model('User',{
//     name :{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })

// in this we pass the valid data which we define in model
// const me=new User({
//     name:'Rajat',
//     age:23
// })

// in case to check validation is working or not we change the age and get a very long o/p obj.
// const me=new User({
//     name:'Rajat',
//     age:'Yooo'
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//Practice
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

// const Tasks=mongoose.model('Tasks',{
//     description :{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })

// const task=new Tasks({
//     description:'Clean the Room',
//     completed:true
// })

// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })

//Applying Validation in Users Model
//1 applying predefine validation i.e required
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

// const User=mongoose.model('User',{
//     name :{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number
//     }
// })

// //in this we pass the nothing in new user and get the error bcz we make name field as required
// // const me=new User({

// // })

// //in this we only provide name only
// const me=new User({
//     name:'Raj'
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//2 Making Custom validation
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

// const User=mongoose.model('User',{
//     name :{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })

// //in this we only provide name only not age so ther is not any problem
// // const me=new User({
// //     name:'Raj'
// // })

// //but in given below we provide the validation so we get the error
// const me=new User({
//     name:'Raj',
//     age:-3
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//3 Using npm Validator Library
// const mongoose=require('mongoose')
// const validator =require('validator')
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

// const User=mongoose.model('User',{
//     name :{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is in valid');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be +ve No.')
//             }
//         }
//     }
// })

// //but in given below we provide the validation so we get the error for email
// // const me=new User({
// //     name:'Raj',
// //     email:'mike@'
// // })

// const me=new User({
//     name:'Raj',
//     email:'mike@google.com'
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//Applying Some more preDefine Validation in Mongoose
//trim,default,lowercase
// const mongoose=require('mongoose')
// const validator =require('validator')
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

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

// const me=new User({
//     name:'         Rajat   ',
//     email:'RAJATJADON@google.com        '
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//Practice with password field
// const mongoose=require('mongoose')
// const validator =require('validator')
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

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

//password with length<7
// const me=new User({
//     name:'         Rajat   ',
//     email:'RAJATJADON@google.com        ',
//     password:'              ftfg         '
// })

//password with containing  Password string
// const me=new User({
//     name:'         Rajat   ',
//     email:'RAJATJADON@google.com        ',
//     password:'Password123'
// })

//passing valid password
// const me=new User({
//     name:'         Rajat   ',
//     email:'RAJATJADON@google.com        ',
//     password:'rj123@yahoo'
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

//Practice Tasks Collection
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true

// })

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

// //Provide Nothing
// // const task=new Tasks({
// // })

// //Providing description and not another field
// //trim only remove the first and last unwanted spaces
// const task=new Tasks({
//     description:'          Clean the             Room',
// })

// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })

//CONECTING MONGOOSE TO EXPRESS

//Create Users

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://rajatjadon701:rvoBsw1Mp69MJvqR@cluster0.xw9viqf.mongodb.net/task-manager-api",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`CONNECTED TO MONGO!`);
  })
  .catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
  });

//transfer the Users model in user.js file
//transfer the Tasks model in task.js file

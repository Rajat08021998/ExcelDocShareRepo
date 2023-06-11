// const express= require('express')

// const app= express()
// const port= process.env.PORT || 3000

// //Resource Creation
// app.post('/users',(req, res)=>{
//     res.send('Testing')
// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//CONECTING MONGOOSE TO EXPRESS

//Create Users
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')

// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())

// //Resource Creation
// app.post('/users',(req, res)=>{
//     // console.log(req.body);
//     // res.send('Testing')

//     // //Creating a User Instance and save it to data base
//     // const user= new User(req.body)

//     // user.save().then(()=>{
//     //     res.send(user)
//     // }).catch((error)=>{
//     //     res.send(error)
//     // })

//     //Creating a User Instance and save it to data base and also defining the proper status code in postman
//     const user= new User(req.body)

//     user.save().then(()=>{
//         res.send(user)
//     }).catch((error)=>{
//         // res.status(400)
//         // res.send(error)
// /////////////////OR//////////////////////////
//         res.status(400).send(error)
//     })

// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Practice
//Create Task
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')

// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())

// app.post('/users',(req, res)=>{
//     const user= new User(req.body)

//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })

// })

// //Resource Creation for Task
// app.post('/tasks',(req,res)=>{
//     const task= new Task(req.body)

//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })
// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Craeting Query for multiple and single and also Practice in Task
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')

// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())

// app.post('/users',(req, res)=>{
//     const user= new User(req.body)

//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })

// })
// //geting all the users
// app.get('/users',(req,res)=>{
//     User.find({}).then((user)=>{
//         res.send(user)
//     }).catch((error)=>{
//         res.status(500).send()
//     })
// })

// //getting a particular user

// //checking the req parameter
// // app.get('/users/:id',(req,res)=>{
// //     console.log(req.params)
// // })

// //getting the param data and then performing the query
// app.get('/users/:id',(req,res)=>{
//     const _id = req.params.id

//     User.findById(_id).then((user)=>{
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((error)=>{
//         res.status(404).send(error)
//     })

// })

// //Resource Creation for Task
// app.post('/tasks',(req,res)=>{
//     const task= new Task(req.body)

//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })
// })

// //getting all the tasks
// app.get('/tasks',(req,res)=>{
//     Task.find({}).then((task)=>{
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.get('/tasks/:id',(req,res)=>{
//     const _id=req.params.id
//     Task.findById(_id).then((task)=>{
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e)=>{
//         res.status(404).send(e)
//     })
// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//USING ASYNC AWAIT IN
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')

// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())

// app.post('/users',async (req, res)=>{
//     const user= new User(req.body)

//     // user.save().then(()=>{
//     //     res.status(201).send(user)
//     // }).catch((error)=>{
//     //     res.status(400).send(error)
//     // })

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }

// })
// //geting all the users
// app.get('/users',async (req,res)=>{
//     // User.find({}).then((user)=>{
//     //     res.send(user)
//     // }).catch((error)=>{
//     //     res.status(500).send()
//     // })

//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting the param data and then performing the query
// app.get('/users/:id',async (req,res)=>{
//     const _id = req.params.id

//     // User.findById(_id).then((user)=>{
//     //     if(!user){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch((error)=>{
//     //     res.status(404).send(error)
//     // })

//     try {
//         const user = await User.findById(_id)
//         if(!user){
//           return res.status(404).send()
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(500).send(error)
//     }

// })

// //Updating the User
// //simple update
// // app.patch('/users/:id', async (req,res)=>{
// //     try {
// //         const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})
// //         console.log(user);
// //         if(!user){
// //             return res.status(404).send()
// //         }
// //         res.send(user)

// //     } catch (error) {
// //         res.status(400).send(error)
// //     }
// //})

// //update the user and also tell which field are invalid
// app.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})
//         console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })

// //Delete User
// app.delete('/users/:id', async ( req , res)=>{
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if(!user)
//         {
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// //Resource Creation for Task
// app.post('/tasks',async (req,res)=>{
//     const task= new Task(req.body)

//     // task.save().then(()=>{
//     //     res.status(201).send(task)
//     // }).catch((error)=>{
//     //     res.status(400).send(error)
//     // })

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //getting all the tasks
// app.get('/tasks',async (req,res)=>{
//     // Task.find({}).then((task)=>{
//     //     res.send(task)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })

//     try {
//         const task = await Task.find({})
//         res.send(task)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting particular task
// app.get('/tasks/:id', async (req,res)=>{

//     // Task.findById(_id).then((task)=>{
//     //     if(!task){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(task)
//     // }).catch((e)=>{
//     //     res.status(404).send(e)
//     // })
//     const _id =req.params.id
//     try {
//         const task = await Task.findById(_id)
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(404).send()
//     }
// })

// //update Task
// app.patch('/tasks/:id', async (req , res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['description','completed']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }

// })

// //Deleting Task
// app.delete('/tasks/:id', async ( req , res)=>{
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if(!task)
//         {
//             return res.status(404).send()
//         }
//         res.send(task)

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Separating the Routes File

//Before Separation the index file is look like below
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')

// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())

// app.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }

// })
// //geting all the users
// app.get('/users',async (req,res)=>{

//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting the param data and then performing the query
// app.get('/users/:id',async (req,res)=>{
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if(!user){
//           return res.status(404).send()
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(500).send(error)
//     }

// })

// //update the user and also tell which field are invalid
// app.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})
//         console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })

// //Delete User
// app.delete('/users/:id', async ( req , res)=>{
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if(!user)
//         {
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// //Resource Creation for Task
// app.post('/tasks',async (req,res)=>{
//     const task= new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //getting all the tasks
// app.get('/tasks',async (req,res)=>{

//     try {
//         const task = await Task.find({})
//         res.send(task)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting particular task
// app.get('/tasks/:id', async (req,res)=>{

//     const _id =req.params.id
//     try {
//         const task = await Task.findById(_id)
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(404).send()
//     }
// })

// //update Task
// app.patch('/tasks/:id', async (req , res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['description','completed']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }

// })

// //Deleting Task
// app.delete('/tasks/:id', async ( req , res)=>{
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if(!task)
//         {
//             return res.status(404).send()
//         }
//         res.send(task)

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//After Separate Route file
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)

// // we have to do the below code to use it on browser
// // const router = new express.Router()
// // router.get('/test' , ( req , res ) => {
// //     res.send('This is from other router ')
// // })
// // app.use(router)
// ////////////////////////////////////////////////////

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//adding Ecommerce Project
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Securely Storing Passwords : using npm i bcryptjs
//testing the bcrypt library
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

// const bcrypt = require('bcryptjs')
// const myFunction = async () =>{
//   const password = 'Red12345'
//   const hashedPassword = await bcrypt.hash(password,8)   // the second parameter is no. of rounds
//   console.log(password);
//   console.log(hashedPassword);

//   // for comparing the passwords
//   const isMatch= await bcrypt.compare('Red12345',hashedPassword);
//   console.log(isMatch);
//   const isMatch2= await bcrypt.compare('ggfgvb',hashedPassword);
//   console.log(isMatch2);

// }
// myFunction()

//Using JSon Token
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{

//     //const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken')

//     //we can also define the third arg ie the expires time
//     //const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken',{ expiresIn : '0 seconds'})
//     const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken',{ expiresIn : '7 days'})
//     console.log(token);

//     //corrrect one
//     const data =jwt.verify(token,'thisIsMyNewToken')
//     console.log(data);

//     //incorrect one
//     // const data1 =jwt.verify(token,'thisMyNewToken')
//     // console.log(data1);
// }
// myFunction()

//Using Express Middle Ware for authentication

//
//without MiddleWare -> new Req ->run route handler
//with MiddleWare -> new Req -> do something -> run route handler
//

//with Express MiddleWare only
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// //applying conditional logic to run only specific method
// // app.use(( req , res , next )=>{
// //     // console.log(req.method , req.path);
// //     // next()

// //   if(req.method === 'GET'){
// //     res.send('GET req are disabled')
// //   }
// //   else{
// //     next()
// //   }

// // })

// //Practice : applying the logic for when site is in Maintence mode
// app.use((req, res , next) =>{
//   res.status(503).send('Site is in Maintence Mode')
// })

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{

//     //const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken')

//     //we can also define the third arg ie the expires time
//     //const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken',{ expiresIn : '0 seconds'})
//     const token = jwt.sign({ _id : 'abc123'},'thisIsMyNewToken',{ expiresIn : '7 days'})
//     console.log(token);

//     //corrrect one
//     const data =jwt.verify(token,'thisIsMyNewToken')
//     console.log(data);

//     //incorrect one
//     // const data1 =jwt.verify(token,'thisMyNewToken')
//     // console.log(data1);
// }
// myFunction()

//applying auth middleWare
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//
//Designing a new route for deleting the auth token after logout api hit
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Hiding Private data like password even when user is login
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//code refactoring and also using auth token in delete and update

// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Applying Authentication and Security in Task so that only the Login User can see,update or delete the task

//applying concept so that task stored the id of user

// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Using some features of Mongoose for referencing one table to another

// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//some addtional features of mongoose
//const team = require('./db/models/task')
// const main= async () =>{
//   //the below code is for finding the user with the help of task
//   // const task = await team.findById('60a21d4b06301c113064fb7a')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner);

// // to finding the task using user id
// // the below code is for finding the task using user id or details
// //user id ='60a21b3b950f2b1eac5eab3a'

// const user = await User.findById('60a21b3b950f2b1eac5eab3a')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks);

// }

// main()

//Applying timestamps, Filtering sorting and Pagination
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Adding File upload
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// //Adding npm i  multer to project
// //here is the example of code for file uploading

// const multer = require('multer')
// const upload = multer({
//   dest :'images',
// // for validation in File upload
// //1 size
//   limits :{
//     fileSize : 1000000
//   },
// //2 for upload only specific file only
// fileFilter(req , file, cb){

//   // if(!file.originalname.endsWith('.pdf')){
//   //   return cb(new Error('Please upload a PDF'))
//   // }

//   //we can also use the regular expressions
//   if(!file.originalname.match(/\.(doc|docx)$/)){
//     return cb(new Error('Please upload a word file'))
//   }

//   cb(undefined , true)

//   // You can always pass an error if something goes wrong:
//   // cb(new Error('File must be a PDF'))

//   // To accept the file pass `true`
//   // cb(undefined , true)

//   // To reject this file pass `false
//   // cb(undefined , false)
// }

// })
// app.post('/upload', upload.single('upload') , ( req , res)=>{
//     res.send()
// })

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//Handling Express Errors
// const express= require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task= require('./db/models/task')
// //for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require('./routers/task')
// const itemRouter = require('./routers/item')
// const app= express()
// const port= process.env.PORT || 3000

// //Adding npm i  multer to project
// //here is the example of code for file uploading

// const multer = require('multer')
// const upload = multer({
//   dest :'images',
// // for validation in File upload
// //1 size
//   limits :{
//     fileSize : 1000000
//   },
// //2 for upload only specific file only
// fileFilter(req , file, cb){

//   if(!file.originalname.match(/\.(doc|docx)$/)){
//     return cb(new Error('Please upload a word file'))
//   }

//   cb(undefined , true)

// }

// })
// //Error Handling
// //below code is just the example
// // const errorMiddleware = (req, res, next)=>{
// //   throw new Error ('From My Middleware')
// // }
// // app.post('/upload', errorMiddleware  , ( req , res)=>{
// //     res.send()
// // },(error , req , res , next)=>{
// //   res.status(400).send({ error : error.message})
// // })

// //Now the above  below code is Error handling wiyhout getting HTML in postman
// app.post('/upload', upload.single('upload')  , ( req , res)=>{
//   res.send()
// },(error , req , res , next)=>{
// res.status(400).send({ error : error.message})
// })

// app.use(express.json())
// ///we use it here//
// app.use(userRouter)
// app.use(taskRouter)
// app.use(itemRouter)
// ///setting the cors
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//     res.header("preflightContinue", false);// update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.listen(port,()=>{
//     console.log('Server is Started on port: '+port);
// })

//CROPPING AND IMAGE FORMATTING
const { Server } = require("socket.io");
const path = require("path");
const express = require("express");
const http = require("http");
require("./src/db/mongoose");
const corsBrowser = require("cors");
const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

//for using the separate file router we create a user.js file in router folder and create the route
// const userRouter =  require('./routers/user')
// const taskRouter = require("./routers/task");
const itemRouter = require("./src/routers/item");
const userSheetRouter = require("./src/routers/UserSheetRouter");
const userLogin = require("./src/routers/UserLogin");
const app = express();
const appServer = http.createServer(app);
const port = process.env.PORT || 8080;

/*s
BELOW CODE IS USED FOR ONLY TO SHOW HOW TO USE FILE UPLOAD AND HOW TO HANDLE ERROR only
//Adding npm i  multer to project
//here is the example of code for file uploading

const multer = require('multer')
const upload = multer({
  dest :'images',
// for validation in File upload
//1 size
  limits :{
    fileSize : 1000000
  },
//2 for upload only specific file only
fileFilter(req , file, cb){

  if(!file.originalname.match(/\.(doc|docx)$/)){
    return cb(new Error('Please upload a word file'))
  }


  cb(undefined , true)

  
}

})
*/
app.use("/", express.static(path.join(__dirname, "client/excelClient/build")));
console.log("Path Locar==>", path.join(__dirname, "client/excelClient/build"));
app.use(express.static(path.join(__dirname, "public")));
app.use(corsBrowser());
app.use(express.json());
///we use it here//
// app.use(userRouter)
// app.use(taskRouter);
app.use(itemRouter);
app.use(userSheetRouter);
app.use(userLogin);
///setting the cors
let onlineUser = [];
const addNewUsers = (userId, socketId) => {
  if (onlineUser.some((user) => user.userId === userId)) {
    let index = onlineUser.findIndex((user) => user.userId === userId);
    onlineUser[index]["userId"] = userId;
    onlineUser[index]["socketId"] = socketId;
  }
  !onlineUser.some((user) => user.userId === userId) &&
    onlineUser.push({ userId, socketId });
};

const removeUsers = (userId, socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("preflightContinue", false); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

io.on("connection", (socket) => {
  // console.log("Some One Has Connected",onlineUser);
  // io.emit("firstEvent","Hello this is first Event");

  // socket.on("newUser",(userName)=>{
  //   addNewUsers (userName,socket.id)

  // })
  socket.on("sendNotification", ({ updatedBy, receiverName, docName }) => {
    let message = `User with userId ${updatedBy} has Updated the Doc with Title ${docName} to get the updated information. Please refres the Application!`;
    io.emit("getNotification", {
      receiverName,
      message,
      updatedBy,
      docName,
    });
  });

  socket.on("deleteNotification", ({ updatedBy, receiverName, docName }) => {
    let message = `User with userId ${updatedBy} has Deleted the Doc with Title ${docName} that had been shared with you to get the updated information. Please refresh the Application!`;
    io.emit("getNotification", {
      receiverName,
      message,
      updatedBy,
      docName,
    });
  });
  socket.on("disconnect", () => {
    // console.log("SomeOne Has Disconnect");
    // removeUsers(socket.id);
  });
});

io.listen(5000);
appServer.listen(port, () => {
  console.log("Server is Started on port: " + port);
});

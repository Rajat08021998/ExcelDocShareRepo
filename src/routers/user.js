// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //this is for test on browser
// // router.get('/test' , ( req , res ) => {
// //     res.send('From a New File ')
// // })


// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })
// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
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
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router



// Applying securely storing password
// it is working fine for create but for upadate we should change some lines of code
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })
// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router

//Applying Logging in User Router
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// //sign up user route


// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         res.send(user)
//     } catch (e) {
//         res.status(400).send()
//     }
// })



// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router


//Using JSON web Token
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()
//     res.status(201).send(user)
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         //res.send(user)
//         res.send({user, token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })



// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router


//setting up the JSON Auth TToken for different devices for user so that he or she can login from different devices
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         //res.send(user)
//         res.send({user, token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })



// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router


//Using Express Middle Ware for authentication

//with Express MiddleWare only
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         //res.send(user)
//         res.send({user, token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })



// //geting all the users
// router.get('/users',async (req,res)=>{
    
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }

// })


// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router




//applying auth middleware
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         //res.send(user)
//         res.send({user, token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //we just want to apply our middleware in all router except for create and login routers

// //geting all the users without getting particular user created data only but all the data
// // router.get('/users', auth , async (req,res)=>{
    
// //     try {
// //         const user = await User.find({})
// //         res.send(user)
// //     } catch (error) {
// //         res.status(500).send()
// //     }

// // })


// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })



// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router





//Designing a new route for deleting the auth token after logout api hit
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user, token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })



// //we just want to apply our middleware in all router except for create and login routers

// //geting all the users without getting particular user created data only but all the data
// // router.get('/users', auth , async (req,res)=>{
    
// //     try {
// //         const user = await User.find({})
// //         res.send(user)
// //     } catch (error) {
// //         res.status(500).send()
// //     }

// // })


// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })



// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router



//Hiding Private data like Password even when user is login
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })



// //we just want to apply our middleware in all router except for create and login routers

// //geting all the users without getting particular user created data only but all the data
// // router.get('/users', auth , async (req,res)=>{
    
// //     try {
// //         const user = await User.find({})
// //         res.send(user)
// //     } catch (error) {
// //         res.status(500).send()
// //     }

// // })


// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })



// //getting the param data and then performing the query
// router.get('/users/:id',async (req,res)=>{
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
// router.patch('/users/:id', async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

//         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             user[update]= req.body[update]
//         })

//         await user.save()

//         //console.log(user);
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// router.delete('/users/:id', async ( req , res)=>{
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



// module.exports=router


//code refactoring and also using auth token in delete and update

// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })



// //we just want to apply our middleware in all router except for create and login routers

// //geting all the users without getting particular user created data only but all the data
// /* router.get('/users', auth , async (req,res)=>{
    
// //     try {
// //         const user = await User.find({})
// //         res.send(user)
// //     } catch (error) {
// //         res.status(500).send()
// //     }

// // })
// */

// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })


// //in this we doesn't need  "getting the param data and then performing the query" bcz of auth token we get only the data of login user

// //getting the param data and then performing the query
// /*router.get('/users/:id',async (req,res)=>{
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

// })*/



// //update the user and also tell which field are invalid
// // router.patch('/users/:id', async (req,res)=>{
// //     const updates = Object.keys(req.body)
// //     const allowedUpadte = ['name','email','password','age']

// //     const  isValidOperation= updates.every((update)=>{
// //         return allowedUpadte.includes(update)
// //     })

// //     if(!isValidOperation){
// //         return res.status(400).send({error : 'Invalid Operation'})
// //     }
// //     try {

// //         //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

// //         const user = await User.findById(req.params.id)

// //         updates.forEach((update)=>{
// //             user[update]= req.body[update]
// //         })

// //         await user.save()

// //         //console.log(user);
// //         if(!user){
// //             return res.status(404).send()
// //         }
// //         res.send(user)

// //     } catch (error) {
// //         res.status(400).send()
// //     }
// // })

// //Update only the user who is authenticated only
// router.patch('/users/me', auth ,async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

        

//         // const user = await User.findById(req.params.id)

//         updates.forEach((update)=>{
//             req.user[update]= req.body[update]
//         })

//         await req.user.save()

//         res.send(req.user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //Delete User
// // router.delete('/users/:id', async ( req , res)=>{
// //     try {
// //         const user = await User.findByIdAndDelete(req.params.id)

// //         if(!user)
// //         {
// //             return res.status(404).send()
// //         }
// //         res.send(user)
        
// //     } catch (error) {
// //         res.status(500).send()
// //     }
// // })

// //deleting User with auth 
// //Now we are deleting ourself bcz we first login then delete the login user data
// router.delete('/users/me', auth ,async ( req , res)=>{
//     try {
//         //const user = await User.findByIdAndDelete(req.user._id)
//         // if(!user)
//         // {
//         //     return res.status(404).send()
//         // }
//         await req.user.remove()
//         res.send(req.user)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })


// module.exports=router


//Cascade Deleting

// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })




// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })




// //Update only the user who is authenticated only
// router.patch('/users/me', auth ,async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

        


//         updates.forEach((update)=>{
//             req.user[update]= req.body[update]
//         })

//         await req.user.save()

//         res.send(req.user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //deleting User with auth 
// //Now we are deleting ourself bcz we first login then delete the login user data
// // router.delete('/users/me', auth ,async ( req , res)=>{
// //     try {
        
// //         await req.user.remove()
// //         res.send(req.user)
        
// //     } catch (error) {
// //         res.status(500).send()
// //     }
// // })


// //Cascade deleting: Deleting User and also deleted user all the task also 
// router.delete('/users/me', auth ,async ( req , res)=>{
//     try {
        
//         await req.user.remove()
//         res.send(req.user)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })

// module.exports=router


//Applying timestamps, Filtering sorting and Pagination

// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })

// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })




// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })




// //Update only the user who is authenticated only
// router.patch('/users/me', auth ,async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

        


//         updates.forEach((update)=>{
//             req.user[update]= req.body[update]
//         })

//         await req.user.save()

//         res.send(req.user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })


// //deleting User with auth 
// //Now we are deleting ourself bcz we first login then delete the login user data
// // router.delete('/users/me', auth ,async ( req , res)=>{
// //     try {
        
// //         await req.user.remove()
// //         res.send(req.user)
        
// //     } catch (error) {
// //         res.status(500).send()
// //     }
// // })


// //Cascade deleting: Deleting User and also deleted user all the task also 
// router.delete('/users/me', auth ,async ( req , res)=>{
//     try {
        
//         await req.user.remove()
//         res.send(req.user)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })

// module.exports=router


//Applying File Upload 
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //for file upload
// const multer = require('multer')

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })



// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })




// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })


// //Update only the user who is authenticated only
// router.patch('/users/me', auth ,async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {

        


//         updates.forEach((update)=>{
//             req.user[update]= req.body[update]
//         })

//         await req.user.save()

//         res.send(req.user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })




// //Cascade deleting: Deleting User and also deleted user all the task also 
// router.delete('/users/me', auth ,async ( req , res)=>{
//     try {
        
//         await req.user.remove()
//         res.send(req.user)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })
// //Practice
// //Upload the User file

// // const upload = multer({
// //     dest: 'avatar'
// // })

// // router.post('/users/me/avatar' , upload.single('avatar'), (req , res)=>{
// //     res.send()
// // })

// //Practice
// //Validation to upload only the image of user 
// // const upload = multer({
// //     dest: 'avatar',
// //     limits :{
// //         fileSize : 1000000
// //     },
// //     fileFilter(req, file , cb){
// //         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
// //             cb(new Error('Please upload the image only'))
// //         }
// //         cb(undefined,true)
// //     }
// // })

// // router.post('/users/me/avatar' , upload.single('avatar'), (req , res)=>{
// //     res.send()
// // })


// //Practice : Applying Error Handling
// const upload = multer({
//     dest: 'avatar',
//     limits :{
//         fileSize : 1000000
//     },
//     fileFilter(req, file , cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             cb(new Error('Please upload the image only'))
//         }
//         cb(undefined,true)
//     }
// })


// router.post('/users/me/avatar' , upload.single('avatar'), (req , res)=>{
//     res.send()
// },(error , req , res , next)=>{
//     res.status(400).send({ error : error.message})
// })

// module.exports=router


//Adding Authentication and linking the information who upload which image
// const express= require('express')
// const User =require('../db/models/user')
// const router = new express.Router()

// //for file upload
// const multer = require('multer')

// //require auth middleware file
// const auth =  require('../middleware/auth')

// //creating user
// router.post('/users',async (req, res)=>{
//     const user= new User(req.body)

// try {
//     await user.save()

//     const token = await user.generateAuthToken()
    

//     res.status(201).send({user, token})
// } catch (error) {
//     res.status(400).send(error)
// }
    
// })



// // setting up sign up user route and sendind the token
// router.post('/users/login', async ( req , res)=>{
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)

//         const token = await user.generateAuthToken()

//         res.send({user , token})
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// //route to user Log out from single device
// router.post('/users/logout', auth , async (req , res ) =>{
//     try {
//         req.user.tokens= req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //route to user Log out from All devices
// router.post('/users/logoutAll', auth , async (req , res ) =>{
//     try {
//         req.user.tokens = []

//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// //using auth token to get only the login user created data to show only
// router.get('/users/me', auth , async (req,res)=>{
    
//     res.send(req.user)
// })


// //Update only the user who is authenticated only
// router.patch('/users/me', auth ,async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['name','email','password','age']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }
//     try {
//         updates.forEach((update)=>{
//             req.user[update]= req.body[update]
//         })

//         await req.user.save()

//         res.send(req.user)

//     } catch (error) {
//         res.status(400).send()
//     }
// })




// //Cascade deleting: Deleting User and also deleted user all the task also 
// router.delete('/users/me', auth ,async ( req , res)=>{
//     try {
        
//         await req.user.remove()
//         res.send(req.user)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })


// //Adding connection authentication and user information 

// const upload = multer({
//     limits :{
//         fileSize : 1000000
//     },
//     fileFilter(req, file , cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             cb(new Error('Please upload the image only'))
//         }
//         cb(undefined,true)
//     }
// })


// router.post('/users/me/avatar' , auth ,upload.single('avatar'), async (req , res)=>{
//     req.user.avatar=req.file.buffer
//     await req.user.save()
//     res.send()
// },(error , req , res , next)=>{
//     res.status(400).send({ error : error.message})
// })

// //Practice Deleting the Avatar for the authenicated user
// router.delete('/users/me/avatar' , auth, async (req , res)=>{
//     req.user.avatar=undefined
//     await req.user.save()
//     res.send()
// },(error , req , res , next)=>{
//     res.status(400).send({ error : error.message})
// })

// //TO SHOW THE USER AVATAR ON BROWSER
// router.get('/users/:id/avatar', async(req, res)=>{
//     try {
//         const user = await User.findById(req.params.id)

//         if(!user || !user.avatar){
//             throw new Error()
//         }

//         res.set('Content-Type', 'image/jpg')
//         res.send(user.avatar)
//     } catch (error) {
//         res.status(404).send()
        
//     }
// })

// module.exports=router

//AUTO CROPPING AND IMAGE FORMATTING 
const express= require('express')
const User =require('../db/models/user')
const router = new express.Router()

//for file upload
const multer = require('multer')

//For Cropping and Image Formatting
const sharp = require('sharp')

//require auth middleware file
const auth =  require('../middleware/auth')


//creating user
router.post('/users',async (req, res)=>{
    const user= new User(req.body)

try {
    await user.save()

    const token = await user.generateAuthToken()
    

    res.status(201).send({user, token})
} catch (error) {
    res.status(400).send(error)
}
    
})



// setting up sign up user route and sendind the token
router.post('/users/login', async ( req , res)=>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateAuthToken()

        res.send({user , token})
    } catch (e) {
        res.status(400).send()
    }
})

//route to user Log out from single device
router.post('/users/logout', auth , async (req , res ) =>{
    try {
        req.user.tokens= req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//route to user Log out from All devices
router.post('/users/logoutAll', auth , async (req , res ) =>{
    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//using auth token to get only the login user created data to show only
router.get('/users/me', auth , async (req,res)=>{
    
    res.send(req.user)
})


//Update only the user who is authenticated only
router.patch('/users/me', auth ,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpadte = ['name','email','password','age']

    const  isValidOperation= updates.every((update)=>{
        return allowedUpadte.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid Operation'})
    }
    try {
        updates.forEach((update)=>{
            req.user[update]= req.body[update]
        })

        await req.user.save()

        res.send(req.user)

    } catch (error) {
        res.status(400).send()
    }
})




//Cascade deleting: Deleting User and also deleted user all the task also 
router.delete('/users/me', auth ,async ( req , res)=>{
    try {
        
        await req.user.remove()
        res.send(req.user)
        
    } catch (error) {
        res.status(500).send()
    }
})


//Adding connection authentication and user information 

const upload = multer({
    limits :{
        fileSize : 1000000
    },
    fileFilter(req, file , cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb(new Error('Please upload the image only'))
        }
        cb(undefined,true)
    }
})

//Cropping and Image Formatting
router.post('/users/me/avatar' , auth ,upload.single('avatar'), async (req , res)=>{
    //req.user.avatar=req.file.buffer
//Using Sharp

const buffer = await sharp(req.file.buffer).resize({ width :250 , height :250 }).png().toBuffer()
req.user.avatar= buffer
    await req.user.save()
    res.send()
},(error , req , res , next)=>{
    res.status(400).send({ error : error.message})
})

//Practice Deleting the Avatar for the authenicated user
router.delete('/users/me/avatar' , auth, async (req , res)=>{
    req.user.avatar=undefined
    await req.user.save()
    res.send()
},(error , req , res , next)=>{
    res.status(400).send({ error : error.message})
})

//TO SHOW THE USER AVATAR ON BROWSER
router.get('/users/:id/avatar', async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        // res.set('Content-Type', 'image/jpg')

        // After the CROPING AND IMAGE Formating we also have to change this also
        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (error) {
        res.status(404).send()
        
    }
})

module.exports=router

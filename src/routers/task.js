// const express= require('express')
// const Task =require('../db/models/task')
// const router = new express.Router()




// //Resource Creation for Task
// router.post('/tasks',async (req,res)=>{
//     const task= new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //getting all the tasks
// router.get('/tasks',async (req,res)=>{
    
//     try {
//         const task = await Task.find({}) 
//         res.send(task)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting particular task
// router.get('/tasks/:id', async (req,res)=>{
    
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
// router.patch('/tasks/:id', async (req , res)=>{
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
// router.delete('/tasks/:id', async ( req , res)=>{
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


// module.exports = router



// Practice : Applying Securely Storing  
// const express= require('express')
// const Task =require('../db/models/task')
// const router = new express.Router()




// //Resource Creation for Task
// router.post('/tasks',async (req,res)=>{
//     const task= new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //getting all the tasks
// router.get('/tasks',async (req,res)=>{
    
//     try {
//         const task = await Task.find({}) 
//         res.send(task)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting particular task
// router.get('/tasks/:id', async (req,res)=>{
    
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
// router.patch('/tasks/:id', async (req , res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['description','completed']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }

//     try {
//         //const task = await Task.findByIdAndUpdate(req.params.id,req.body, { new : true , runValidators :true})

//         const task = await Task.findById(req.params.id)

//         updates.forEach((update)=>{
//             task[update]= req.body[update]
//         })

//         await task.save()
//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
    
// })

// //Deleting Task
// router.delete('/tasks/:id', async ( req , res)=>{
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


// module.exports = router


//Applying Authentication and Security in Task so that only the Login User can see,update or delete the task


//applying concept so that task stored the id of user
// const express= require('express')
// const Task =require('../db/models/task')
// const router = new express.Router()

// const  auth = require('../middleware/auth')

// //Resource Creation for Task
// // router.post('/tasks',async (req,res)=>{
// //     const task= new Task(req.body)

// //     try {
// //         await task.save()
// //         res.status(201).send(task)
// //     } catch (error) {
// //         res.status(400).send(error)
// //     }
// // })


// //Resource Creation with also saving who created the task
// router.post('/tasks', auth ,async (req,res)=>{
//     // const task= new Task(req.body)
//     const task = new Task({
//         ...req.body,
//         owner :req.user._id
//     })
//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


// //getting all the tasks for the authenticated user
// router.get('/tasks',auth , async (req,res)=>{
    
    
//     try {
//         //const task = await Task.find({})
//         //we do this in two different ways
//         //1
//         //const task = await Task.find({owner: req.user._id}) 

//         //2 
//         await req.user.populate('tasks').execPopulate()
//         res.send(req.user.tasks)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// //getting particular task after the login is done and we pass the task id 
// router.get('/tasks/:id', auth ,async (req,res)=>{
    
//     const _id =req.params.id
//     try {
//         //const task = await Task.findById(_id)

//         const task = await Task.findOne({_id , owner : req.user._id}) 
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(404).send()
//     }
// })

// //update Task after the user authenticated
// router.patch('/tasks/:id',auth ,async (req , res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpadte = ['description','completed']

//     const  isValidOperation= updates.every((update)=>{
//         return allowedUpadte.includes(update)
//     })

//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid Operation'})
//     }

//     try {

//         //const task = await Task.findById(req.params.id)

//         const task = await Task.findOne({_id :req.params.id , owner : req.user._id})

//         if(!task){
//             res.status(404).send()
//         }

//         updates.forEach((update)=>{
//             task[update]= req.body[update]
//         })

//         await task.save()
        
//         res.send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
    
// })

// //Deleting Task after authentication
// router.delete('/tasks/:id',  auth ,async ( req , res)=>{
//     try {
//         //const task = await Task.findByIdAndDelete(req.params.id)

//         const task = await Task.findOneAndDelete({_id :req.params.id , owner : req.user._id })

//         if(!task)
//         {
//             return res.status(404).send()
//         }
//         res.send(task)
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })


// module.exports = router


////Applying timestamps, Filtering sorting and Pagination
const express= require('express')
const Task =require('../db/models/task')
const router = new express.Router()

const  auth = require('../middleware/auth')

//Resource Creation for Task
// router.post('/tasks',async (req,res)=>{
//     const task= new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


//Resource Creation with also saving who created the task
router.post('/tasks', auth ,async (req,res)=>{
    // const task= new Task(req.body)
    const task = new Task({
        ...req.body,
        owner :req.user._id
    })
    try {
        await task.save()
        res.status(201).send({status:'success',result :task})
    } catch (error) {
        res.status(400).send(error)
    }
})


//getting all the tasks for the authenticated user and also applying Filtering bcz this brings all the routes 
router.get('/tasks',auth , async (req,res)=>{
    
    
    try {
        // const task = await Task.find({})
        // res.send({result : task})
        //we do this in two different ways
        //1
        //const task = await Task.find({owner: req.user._id}) 

        //2 
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (error) {
        res.status(500).send()
    }

})


//the below one is with applying filtering and above one is without applyig filtering
//Applying Filtering In getting all task but with the help of filter
// this is our query string for filtering -> //GET /tasks?completed=true
// router.get('/tasks',auth , async (req,res)=>{
    
//     const match ={}
//     if(req.query.completed){
//         match.completed= req.query.completed==='true'
//     }
    
//     try {
//         //2 
//         await req.user.populate({
//             path :'tasks',
//             match 
//         }).execPopulate()
//         res.send(req.user.tasks)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

//Applying the pagination in the above code after filtering
//in pagination we use two things 
//1 limit : no. of data u want to show
//2 skip : from which set of data u want to show
//// this is our query string for pagination -> //GET /tasks?limit=10&skip=20
//in the above url we see the data of the third page bcz skip is 20 
// router.get('/tasks',auth , async (req,res)=>{
    
//     const match ={}
//     if(req.query.completed){
//         match.completed= req.query.completed==='true'
//     }
    
//     try {
//         //2 
//         await req.user.populate({
//             path :'tasks',
//             match,
//             options:{
//                 limit :parseInt(req.query.limit),
//                 skip : parseInt(req.query.skip)
//             } 
//         }).execPopulate()
//         res.send(req.user.tasks)
//     } catch (error) {
//         res.status(500).send()
//     }

// })

//Applying sorting after filtering and pagination
// this is our query string for filtering -> //GET /tasks?completed=true
// this is our query string for pagination -> //GET /tasks?limit=10&skip=20
// this is our query string for sorting -> //GET /tasks?sortBy=createdAt:asc or //GET /tasks?sortBy=createdAt:desc
/*router.get('/tasks',auth , async (req,res)=>{
    
    const match ={}
    const sort ={}


    if(req.query.completed){
        match.completed= req.query.completed==='true'
    }

    if(req.query.sortBy){
      const parts = req.query.sortBy.split(':')
      sort[parts[0]] = parts[1]==='desc' ? -1 : 1  
    }
    
    try {
        //2 
        await req.user.populate({
            path :'tasks',
            match,
            options:{
                limit :parseInt(req.query.limit),
                skip : parseInt(req.query.skip),
                sort 
            } 
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (error) {
        res.status(500).send()
    }

})*/


//getting particular task after the login is done and we pass the task id 
router.get('/tasks/:id', auth ,async (req,res)=>{
    
    const _id =req.params.id
    try {
        //const task = await Task.findById(_id)

        const task = await Task.findOne({_id , owner : req.user._id}) 
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(404).send()
    }
})

//update Task after the user authenticated
router.patch('/tasks/:id',auth ,async (req , res)=>{
    const updates = Object.keys(req.body)
    const allowedUpadte = ['description','completed']

    const  isValidOperation= updates.every((update)=>{
        return allowedUpadte.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid Operation'})
    }

    try {

        //const task = await Task.findById(req.params.id)

        const task = await Task.findOne({_id :req.params.id , owner : req.user._id})
        console.log("Task ===>",task)
        if(!task){
            res.status(404).send()
        }

        updates.forEach((update)=>{
            task[update]= req.body[update]
        })

        await task.save()
        
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

//Deleting Task after authentication
router.delete('/tasks/:id',  auth ,async ( req , res)=>{
    try {
        //const task = await Task.findByIdAndDelete(req.params.id)

        const task = await Task.findOneAndDelete({_id :req.params.id , owner : req.user._id })

        if(!task)
        {
            return res.status(404).send()
        }
        res.send(task)
        
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router

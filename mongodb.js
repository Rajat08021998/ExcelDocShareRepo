//CRUD 

//setting up the connection
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     console.log('Connected Correctly');
// })

//Inserting One document into the Mongodb database
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)
//     db.collection('users').insertOne({
//         name:'Rajat',
//         age:23
//     })
// })


//inserting one method
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name:'James',
//         age:23
//     },(error , result)=>{
//         if(error){
//             return console.log('Unable to insert');
//         }

//         console.log(result.ops);
//     })
// })



//Bulk inserting 
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     db.collection('users').insertMany([
//     {
//         name:'Jan',
//         age:23
//     },
//     {
//         name:'Go',
//         age:88
//     }
//     ],(error , result)=>{
//         if(error){
//             return console.log('Unable to insert');
//         }

//         console.log(result.ops);
//     })
// })

//Practice making a new Collection Task
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     db.collection('tasks').insertMany([
//     {
//         description:'Jan hjygfjhguyg jhhvjygyjjhhj',
//         completed:true
//     },
//     {
//         description:',mkljan hjygfjhguyg jhhvjygyjjhhj',
//         completed:false
//     },{
//         description:'Jankljhuihn hjygfjhguyg jhhvjygyjjhhj',
//         completed:true
//     }],(error , result)=>{
//         if(error){
//             return console.log('Unable to insert');
//         }

//         console.log(result.ops);
//     })
// })

//Learning about obj id
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

//we can also use the deStructing
// const {MongoClient,ObjectID}=require('mongodb')

// const id =new ObjectID()

// console.log(id);
// console.log(id.getTimestamp());

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)
//     db.collection('users').insertOne({
//                 _id:id,
//                 name:'Vijay',
//                 age:29
//             },(error , result)=>{
//                 if(error){
//                     return console.log('Unable to insert');
//                 }
        
//                 console.log(result.ops);
//             })
    
// })


//checking the objid.id and other methods
// const {MongoClient,ObjectID}=require('mongodb')

// const id =new ObjectID()

// // console.log(id);
// // console.log(id.getTimestamp());

// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)
    
// })



//Querying or Read in Mongo Db
// const {MongoClient,ObjectID}=require('mongodb')

// const id =new ObjectID()


// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     // db.collection('users').findOne({name:'Jan'}, (error , user)=>{
//     //     if(error){
//     //         return console.log('Unable to find the User');
//     //     }
//     //     console.log(user);
//     // })
    
//     // specifying the data which doesn't exist in db like age =1
//     // db.collection('users').findOne({name:'Jan' , age:1}, (error , user)=>{
//     //     if(error){
//     //         return console.log('Unable to find the User');
//     //     }
//     //     console.log(user);
//     // })
    
//     //searching with id directly it gives us null
    
//     // db.collection('users').findOne({_id:'608c0ad1de5a4b1c44477b8e'}, (error , user)=>{
//     //     if(error){
//     //         return console.log('Unable to find the User');
//     //     }
//     //     console.log(user);
//     // })
    
//     //specifying the valid objectId by passing 
//     // db.collection('users').findOne({_id: new ObjectID("608c0ad1de5a4b1c44477b8e")}, (error , user)=>{
//     //     if(error){
//     //         return console.log('Unable to find the User');
//     //     }
//     //     console.log(user);
//     // })
    

//     //finding multiple data

//     //toArray
//     // db.collection('users').find({age :23 }).toArray((error,users)=>{
//     //     console.log(users);
//     // })

//     //count
//     // db.collection('users').find({age :23 }).count((error,count)=>{
//     //     console.log(count);
//     // })


//     //Practice
//     // db.collection('tasks').findOne({_id: new ObjectID("608c0ebd71eb4f20c0110122")}, (error , user)=>{
//     //         if(error){
//     //             return console.log('Unable to find the User');
//     //         }
//     //         console.log(user);
//     //     })

//     // db.collection('tasks').find({completed :false }).toArray((error,tasks)=>{
//     //         if(error){
//     //             return console.log('Unable to find the User');
//     //         }    
//     //         console.log(tasks);
//     //     })
    
// })

//Updating database
// const {MongoClient,ObjectID}=require('mongodb')

// const id =new ObjectID()


// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     //Normally we write it as below
//     // const updatePromise=db.collection('users').updateOne({
//     //     _id:new ObjectID("608c0ad1de5a4b1c44477b8e")
//     // },{
//     //     $set:{
//     //         name:'Raj'
//     //     }
//     // })

//     // updatePromise.then((result)=>{
//     //     console.log(result);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // })

//     //we can shorten it also
//     // db.collection('users').updateOne({
//     //     _id:new ObjectID("608c0ad1de5a4b1c44477b8e")
//     // },{
//     //     $set:{
//     //         name:'Ra'
//     //     }
//     // }).then((result)=>{
//     //     console.log(result);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // })
    
//     //Using update operator
//     //$inc
//     // db.collection('users').updateOne({
//     //     _id:new ObjectID("608c0ad1de5a4b1c44477b8e")
//     // },{
//     //     $inc:{
//     //         age:6
//     //     }
//     // }).then((result)=>{
//     //     console.log(result);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // })
    

//     //Update Many 
//     db.collection('tasks').updateMany({
//        completed:false
//     },{
//         $set:{
//             completed:true       
//         }
//     }).then((result)=>{
//         console.log(result.modifiedCount);
//     }).catch((error)=>{
//         console.log(error);
//     })
    
      
// })

//Deleting Collection
// const {MongoClient,ObjectID}=require('mongodb')

// const id =new ObjectID()


// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
//     if(error){
//        return console.log('Unable to Connect to databases');
//     }

//     const db = client.db(databaseName)

//     // db.collection('users').deleteMany({
//     //     age:23
//     // }).then((result)=>{
//     //     console.log(result);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // })

//     db.collection('tasks').deleteOne({
//         description:',mkljan hjygfjhguyg jhhvjygyjjhhj'
//     }).then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//         console.log(error);
//     })

// })
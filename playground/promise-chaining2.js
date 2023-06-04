// require('../src/db/mongoose')

// const Task = require('../src/db/models/task');

//608d70385058e02538f4ce7f
// Task.findByIdAndRemove('608d70385058e02538f4ce7f').then((user)=>{
//     console.log(user);
//     return Task.countDocuments({completed:false})

// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


///or //////// 608d6d7f7530c5201ceb0dc7
// Task.findByIdAndDelete('608d6d7f7530c5201ceb0dc7').then((user)=>{
//     console.log(user);
//     return Task.countDocuments({completed:false})

// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


//Async Practice 

require('../src/db/mongoose')

const Task = require('../src/db/models/task');


const deleteTaskandCount = async (id,completed) =>{
    const deleteTask = await Task.findByIdAndDelete(id)

    const count = await Task.countDocuments({completed})

    return count
}

deleteTaskandCount("608d6f542d61202a64b717a2",false).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
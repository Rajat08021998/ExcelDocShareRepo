// require('../src/db/mongoose')

// const User = require('../src/db/models/user')

// //608d6a2e9a70472d98bb62e6 , 608d67aafb08f4207c478a55

// User.findByIdAndUpdate('608d67aafb08f4207c478a55',{age : 5}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age :5})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(error);
// })



//Async await part 2 : which do the same work as the above function
require('../src/db/mongoose')

const User = require('../src/db/models/user')

//608d6a2e9a70472d98bb62e6 , 608d67aafb08f4207c478a55

// User.findByIdAndUpdate('608d67aafb08f4207c478a55',{age : 5}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age :5})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(error);
// })

const updateAgeAndCount = async (id , age) =>{
        const user = await User.findByIdAndUpdate(id,{ age })
        const count = await User.countDocuments({ age })

        return count
}
updateAgeAndCount("608d67aafb08f4207c478a55",2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
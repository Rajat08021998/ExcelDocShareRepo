
//this is just for checking
// const auth = async (req, res, next ) =>{
//     console.log('Auth MiddleWare');
//     next()
// }

// module.exports = auth 


// actual auth middlewear
// const jwt = require ('jsonwebtoken')
// const User = require ('../db/models/user')
// const auth = async (req, res, next ) =>{
//     try {
//         //const token = req.header('Authorization')  
//         //console.log(token);
//         //in this code we get the value of key that is Authorization  in which we also get the Bearer also to replace it below code is given
//         const token = req.header('Authorization').replace('Bearer ','')
//         const decoded = jwt.verify(token, 'thisIsMyNewToken')
//         const user = await User.findOne({ _id : decoded._id , 'tokens.token':  token })

//         if(!user){
//             throw new Error()
//         }
//         req.user = user
//         next()

//     } catch (e) {
//         res.status(401).send('Error : PLease authenication')
//     }
// }

// module.exports = auth 


//Designing a new route for deleting the auth token after logout api hit
// const jwt = require ('jsonwebtoken')
// const User = require ('../db/models/user')
// const auth = async (req, res, next ) =>{
//     try {
//         const token = req.header('Authorization').replace('Bearer ','')
//         const decoded = jwt.verify(token, 'thisIsMyNewToken')
//         const user = await User.findOne({ _id : decoded._id , 'tokens.token':  token })

//         if(!user){
//             throw new Error()
//         }

//         req.token = token

//         req.user = user
//         next()

//     } catch (e) {
//         res.status(401).send('Error : PLease authenication')
//     }
// }

// module.exports = auth 


//Hiding private data even when user is login
// const jwt = require ('jsonwebtoken')
// const User = require ('../db/models/user')
// const auth = async (req, res, next ) =>{
//     try {
//         const token = req.header('Authorization').replace('Bearer ','')
//         const decoded = jwt.verify(token, 'thisIsMyNewToken')
//         const user = await User.findOne({ _id : decoded._id , 'tokens.token':  token })

//         if(!user){
//             throw new Error()
//         }

//         req.token = token

//         req.user = user
//         next()

//     } catch (e) {
//         res.status(401).send('Error : PLease authenication')
//     }
// }

// module.exports = auth 


//code refactoring and also using auth token in delete and update

const jwt = require ('jsonwebtoken')
const User = require ('../db/models/user')
const auth = async (req, res, next ) =>{
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, 'thisIsMyNewToken')
        const user = await User.findOne({ _id : decoded._id , 'tokens.token':  token })

        if(!user){
            throw new Error()
        }

        req.token = token

        req.user = user
        next()

    } catch (e) {
        res.status(401).send('Error : PLease authenication')
    }
}

module.exports = auth 


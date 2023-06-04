const express= require('express')
const Item = require('../db/models/item')
const router = new express.Router()

//item create
router.post('/items', async ( req , res )=>{
    const item= new Item(req.body)

    try {
        await item.save()
        res.status(201).send(item)
    } catch (error) {
        res.status(400).send(error)
    }
})

//getting all the items
router.get('/items', async ( req , res )=>{
    try {
        const item = await Item.find({})
        res.send(item)
    } catch (error) {
        console.log("ERRROR===>",error);
        res.status(500).send()
    }
})


router.get('/items/:id', async (req,res)=>{
    
    const _id =req.params.id
    try {
        const item = await Item.findById(_id)
        if(!item){
            return res.status(404).send()
        }
        res.send(item)
    } catch (error) {
        res.status(404).send()
    }
})

router.delete('/items/:id', async ( req , res)=>{
    try {
        const item = await Item.findByIdAndDelete(req.params.id)

        if(!item)
        {
            return res.status(404).send()
        }
        res.send(item)
        
    } catch (error) {
        res.status(500).send()
    }
})



module.exports=router
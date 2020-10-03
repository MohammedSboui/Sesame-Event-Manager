const express = require('express')
const router = express.Router()
const cors = require('cors')

const event = require('../models/event');

router.post('/addevent',(req,res) => {
    const Event  = {
        title : req.body.title,
        content : req.body.content,
        place : req.body.place,
        date : req.body.date,
        likes : 0
    }
    try{
        event.create(Event);
        res.send({success})
    }catch (err){
        res.send({error:err});
    } 
})
module.exports = router


const express = require('express');
const router = express.Router();
const uploadPic = require('../multer');

const event = require('../models/event');

router.post('/addevent',uploadPic,(req,res) => {
   // console.log(req.file);
    const Event  = {
        title : req.body.title,
        content : req.body.content,
        place : req.body.place,
        date : req.body.date,
        imageUrl : req.file.path,
        likes : 0
    }
    console.log(Event);
    try{
        event.create(Event);
        res.send({success})
    }catch (err){
        res.send({error:err});
    }
})
module.exports = router


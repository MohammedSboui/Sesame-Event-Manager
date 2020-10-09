const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const EventSchema = new Schema({
 title : {
     type : String,
     required:true
 },
 content :{
     type:String,
     required:true
 },
 place : {
     type:String,
     required:true
 },
 imageUrl : {
     type:String,
     required:true
 },
 date :{
     type : String 
},
 likes : {
     type : Number,
     default : 0
 }
})

module.exports = Event = mongoose.model('Event', EventSchema)
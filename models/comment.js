const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CommentSchema = new Schema({
 title : {
     type : String,
     required:true
 },
 author : {
    type : mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true
 },
 content :{
     type:String,
     required:true
 },
 event :{
    type : mongoose.Schema.Types.ObjectId, ref: 'Event', autopopulate: true
 },
 likes : {
     type : Number,
     default : 0
 }
})

module.exports = Comment = mongoose.model('Comment', CommentSchema)
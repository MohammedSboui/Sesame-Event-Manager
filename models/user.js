const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role :{
      type:String,
      default : 'user'
  },
  name:{
      type :String,
      required:true
  },
  banned:{
      type:Boolean,
      default : false
  }

})

module.exports = User = mongoose.model('User', UserSchema)
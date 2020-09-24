const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const event = require('../models/event');

process.env.SECRET_KEY = 'secretfdqfkdjlfdsjlkfdsl'

router.post('/register', (req, res) => {

    //console.log(req.body);
    
    const userData = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      fullname:req.body.fullname,
      banned : false
    }

    //console.log(userData);
  
    User.findOne({
      username: userData.username
    })
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash
            User.create(userData)
              .then(user => {
                res.json({ status: user.username + ' Registered!' })
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          })
        } else {
          res.json({ error: 'User already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  router.post('/login', (req, res) => {
    User.findOne({
      username: req.body.username
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            // Passwords match
            const payload = {
              _id: user._id,
              username: user.username,
              role:user.role,
              fullname:user.fullname,
              banned:user.banned
          
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          } else {
            // Passwords don't match
            res.json({ error: 'Wrong password !' })
          }
        } else {
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  router.get('/getevents',(req,res)=>{
    event.find().then(
        (events) => {
          res.send(events);
        }
    )
  })
  
module.exports = router
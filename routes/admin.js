const express = require('express')
const router = express.Router()
const cors = require('cors')

router.get('/sayhello' , (req,res)=>{
    res.send('Aaslema');
})
module.exports = router
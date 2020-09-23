const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
const admin = require('./routes/admin');
const user = require('./routes/user');

mongoose.connect('mongodb+srv://admin:admin@cluster0.o7lby.mongodb.net/EventDb?retryWrites=true&w=majority', () => {
    console.log('Connected to database successfully');
});


app.use('/admin', admin);
app.use('/user',user);

app.listen(5000);
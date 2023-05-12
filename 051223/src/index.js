const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('../model/router')
const app = express();
app.use(bodyParser.json())
const PORT = 3000;

// Mongoose Connect
// const URI = "mongodb+srv://ducnguyendautunhanha:<tUChgUwMBvxSHgXW>@cluster0.nkverec.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(URI)


// Test some API
app.get('/' , (req,res) => {
    console.log('Hellooooo')
    res.status(200).send('Halooooo')
})


// API Endpoint
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
})
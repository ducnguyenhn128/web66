const express = require('express');
const PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan')
app.use(bodyParser.json())
app.use(morgan('dev'))
const router = require('./routers/index.js')

// Connect with Database
mongoose.connect('mongodb://127.0.0.1:27017/music', {useNewUrlParser: true, useUnifiedTopology: true})
    // .then(() => {
    //     console.log('connected to mongodb')
    // })
    // .catch(err => {
    //     console.log(err);
    // })

// router
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
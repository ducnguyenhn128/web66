const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = require('../model/router')
const PORT = 3000;



app.use(bodyparser.json())
app.use('/api', router)




app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
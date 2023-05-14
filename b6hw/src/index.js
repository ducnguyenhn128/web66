const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { engine } = require ('express-handlebars')

const app = express();
const router = require('../model/router')
const PORT = 3000;

// Template engine
// app.engine('handlebars', exphbs());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(bodyparser.json())
app.use('/api', router)


app.get('/', (req, res) => {
    res.render('home.handlebars')
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
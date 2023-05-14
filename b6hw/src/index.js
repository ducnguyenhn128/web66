const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const path = require('path')

const app = express();
const router = require('../model/router');
const PORT = 3000;

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

// console.log('PATH: ', path.join(__dirname), 'resources/views')

app.use(bodyparser.json())
app.use('/api', router)


app.get('/', (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
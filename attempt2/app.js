const express = require('express');
const router = require('./src/controllers/router')
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


// For handlebars
const path = require('path');
const {engine} = require('express-handlebars')

// CORS
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
// Body parser
app.use(bodyParser.json())

// HandleBars Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/src/views'))

// API End Point
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
})
// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('/news', (req, res) => {
//     res.render('news')
// })

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
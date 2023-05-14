const express = require('express');
const router = require('./src/controllers/router')
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();

// Body parser
app.use(bodyParser.json())



// API End Point
app.get('', (req, res) => {
    res.status(200).send(`Halooooo`)
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
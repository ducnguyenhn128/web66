const express = require('express');
const mongoose = require('mongoose');
const router = express();

const url = 'mongodb://127.0.0.1:27017/stream'
mongoose.connect(url)

// Define Schema
const userSchema = {
    username: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
}
// Model: Instance of Schema
const userModel = mongoose.model('user', userSchema);



router.get('/', (req, res) => {
    res.status(200).send('OK')
})

// CRUD
// 1. Get all

// 2. Get an id


// 3. Create an id
router.post('/', async(req, res) => {
    const newUser = req.body;
    await userModel.create(newUser)
        .then(() => {
            res.status(201).send('Create new user success');
        })
        .catch(err => console.log(err))

})

// 4. Update an id


// 5. Delete an id

module.exports = router;
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



// CRUD
// 1. Get all
router.get('/', async (req,res) => {
    const data = await userModel.find();

    res.status(200).json({
        message: 'Get All data',
        data: data,
    })
})
// 2. Get an id
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await userModel.findById(req.params.id)
        console.log(foundUser)
        res.status(200).json(foundUser)
    } catch(err) {
        console.log(err);
        res.status(500).send()
    }
})

// 3. Create an id
router.post('/', async(req, res) => {
    const newUser = req.body;
    const {username, age, email} = req.body;
    // check username in DB
    try {
        const foundUser = await userModel.findOne({username: username});
        const foundEmail = await userModel.findOne({email: email});
        // handle username exist
        if (foundUser) {
            res.status(400).send('Username has taken')
        }
        // handle email exist
        if (foundEmail) {
            res.status(400).send('Email already exist')
        }
        // both email and username is NEW
        if (!foundEmail && !foundUser) {
            const newUser = new userModel(req.body);
            await newUser.save();
            res.status(201).send('Create new user success')
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error create new user')
    }
})

// 4. Update an id
router.put('/:id', async(req, res) => {
    const updateUser = req.body;
    try {
        await userModel.findByIdAndUpdate(req.params.id, updateUser)
        res.status(200).send()
    } catch(err) {
        console.log(err);
        res.status(204).send()

    }
})

// 5. Delete an id
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        res.status(200).send();
    } catch(err) {
        console.log(err);
        res.status(500).send();
    }
})


module.exports = router;
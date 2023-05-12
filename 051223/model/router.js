const mongoose = require('mongoose');
const express = require('express')
const router = express();

// Mongoose Connect
const URI = "mongodb+srv://ducnguyendautunhanha:gvAXtNESbIlZqOjb@cluster0.nkverec.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI)
const db = mongoose.connection.useDb('movie')
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
// Model 
const userModel = db.model('films', userSchema);

router.get('/', async (req, res) => {
    // res.status(200).send('api testing')
    const data = await userModel.find();
    console.log(data)
    res.status(200).json(data)
})

router.post('/', async (req, res) => {
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

module.exports = router;
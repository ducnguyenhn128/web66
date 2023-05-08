const express = require('express');
const router = express();

const userModel = require('../models/user')

// CRUD
// Get all user
router.get('/', async (req, res) => {
    const data = await userModel.find();
    res.json({
        message: 'Get all user',
        data: data
    });
})

// Create a new user
router.post('/', async(req, res) => {
    const {name, age, email} = req.body;
    userModel.create({name, age, email})
        .then(() => {
            res.status(201).send()
        })
        .catch(err => console.log(err))
})

// update an user
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.status(200).json(user);
})

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);

    const updateUser = req.body;
    try {
        const update = userModel.findByIdAndUpdate(id, updateUser);
        res.send('Success')
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
    }



})

// delete an user



module.exports = router
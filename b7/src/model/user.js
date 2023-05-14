const mongoose = require('mongoose');

// Connect to MongoDB
const URL = 'mongodb+srv://ducnguyendautunhanha:gvAXtNESbIlZqOjb@cluster0.nkverec.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URL)
// Choose Database
const db = mongoose.connection.useDb('movie');


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

// Define Model
const userModel = db.model('film', userSchema)

const userCRUD = {
    // 1. Get All Users
    get: async function(req, res) {
        const foundUser = await userModel.find()
        res.json(foundUser)
    } ,
    // 2. Get user by ID
    getById: async function(req, res) {
        try {
            const foundUser = await userModel.findById(req.params.id);
            res.status(200).json(foundUser)
        } catch (err) {
            res.status(404).send('User not found')
        }
    },
    // 3. Create new User
    post: async function(req, res) {
        // const newUser = req.body;
        const {username, age, email} = req.body;
        // checking username, email still in the DB ???
        try {
            const foundUser = await userModel.findOne({username: username})
            const foundEmail = await userModel.findOne({email: email})
            if (foundUser) {
                res.status(500).send('Username has taken')
            }
            if (foundEmail) {
                res.status(500).send('Email has taken')
            }
            // create new User
            const newUser = new userModel(req.body)
            await newUser.save();
            res.status(201).send('Create new user success')
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },
    put: async function(req, res) {
        const id = req.params.id;
        try {
            await userModel.findByIdAndUpdate(id, req.body)
            res.status(200).send('Update success');
        } catch (err) {
            console.log(err);
            res.status(500).send()
        }
    },
    delete: async function(req,res) {
        const id = req.params.id;
        try {
            await userModel.findByIdAndDelete(id)
            res.status(204).send()
        } catch (err) {
            console.log(err);
            res.status(500).send()
        }
    }
}


// Export object
module.exports = userCRUD
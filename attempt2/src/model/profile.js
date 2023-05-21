const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const secretkey = 'ab240f90aba431402985eddc45f4d413a33ebc925575c558168a98b2c38033a6';
const jwt = require('jsonwebtoken')
const userProtype = require('./data');

// Connect to MongoDB
const URL = 'mongodb+srv://ducnguyendautunhanha:gvAXtNESbIlZqOjb@cluster0.nkverec.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URL)
// Choose Database
const db = mongoose.connection.useDb('openspace');

// Define Schema
const userSchema = {
    username: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }, 
    info : {type: Object},
    stats: {type: Object},
    avatar: {type: Object},
    follow: {type: Object},
    privacy: {type: Object},
    posts: {type: Array}
}

// Define Model
const userModel = db.model('users', userSchema)

const profileCRUD = {
    // 1. Get a profile: /user/:id
    get: async function(req, res) {
        try {
            const foundUser = await userModel.findById(req.params.id);
            res.status(200).json(foundUser) //send back the user
        } catch (err) {
            res.status(404).send('User not found')
        }
    }
    // follow an user



    // unfollow an user
}

module.exports = profileCRUD;
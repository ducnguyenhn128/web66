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

// ============================================================================
// Profile User (Other user)
// 1. Get a profile: /user/:id
// 2. Follow an user /user/:id/follow
// 3. Unfollow an user /user/:id/unfollow


const profileCRUD = {
    // 1. Get a profile: /user/:id
    getAnUser: async function(req, res) {
        try {
            //find user with the id in the request URL
            const userID = req.params.id
            const foundUser = await userModel.findById(req.params.id);
            // check follow Status between client vs user(id)
            const clientID = req.user.userID;
            const client = await userModel.findById(clientID);
            // The array include all id that client follow
            const clientFollowings = client.follow.following || []
            // console.log(clientFollowing)
            let followStatus = false;
            if (clientFollowings.includes(userID)) {
                followStatus = true
            }
            // console.log(`followStatus: ${followStatus}`)
            // Send data back: user(id)infomation and follow Status
            res.status(200).json({
                user: foundUser,
                followStatus: followStatus
            }) 
        } catch (err) {
            res.status(404).send('User not found')
        }
    },
    // 2. Follow an user
    followAnUser: async function (req, res) {
        try {
            //find user with the id in the request URL
            const userID = req.params.id
            const foundUser = await userModel.findById(req.params.id);
            // check follow Status between client vs user(id)
            const clientID = req.user.userID;
            const client = await userModel.findById(clientID);
            // The array include all id that client follow
            const clientFollowings = client.follow.following || []
            // console.log(clientFollowing)
            // If client has followed user already
            if (clientFollowings.includes(userID)) {
                res.status(400).send()
            }
            // Handle client following user
            clientFollowings.push(userID); // update

            await userModel.findByIdAndUpdate(
                clientID,
                { $push: {'follow.following' : userID}} ,
                {new: true}
            )
            
            // Handle user has a new follower
            await userModel.findByIdAndUpdate(
                userID,
                { $push: {'follow.follower' : clientID}} ,
                {new: true}
            )

            const updateClient = {...client, }
            res.status(201).send();

        } catch (err) {
            res.status(404).send('User not found')
        }
    }


    // 3. Unfollow an user
}

module.exports = profileCRUD;
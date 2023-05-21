const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.mongoDB_URL
mongoose.connect(URL)
// Choose Database
const db = mongoose.connection.useDb('openspace');

// Define Schema
const postSchema = {
    // 8 fields
    // At the post: 5 fileds
    title : {
        type: String, 
        require: true,
    }, 
    body: {
        type: String, 
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    tagList : {
        type: String,
        require: true,
    },
    createdAt : {
        type: String,
        require: true,
    },
    // After post : 3 field
    updatedAt : {
        type: String,
        require: false,
    },
    favorited: {
        type: Array,
        require: true,
    },
    favoritedCount: {
        type: Number,
        require: true
    }
}

// Define model
const postModel = db.model('posts', postSchema)

const postCRUD = {
    // 1. Get recent post from user you follow

    // 2. Get recent post globally


    // 3. Create a post: /post
    post : async function (req, res) {
        console.log(`Receive a new post`)
        const {title, body, author, tagList, createdAt } = req.body;
        
    }

    // 4. Get a post by id

    // 5. Update a post

    // 6. Delete a post
}

module.exports = postCRUD;
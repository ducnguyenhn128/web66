const express = require('express')
const PORT = 3001;
const app = express();
const mongoose = require('mongoose')
const URL = 'mongodb+srv://ducnguyendautunhanha:gvAXtNESbIlZqOjb@cluster0.nkverec.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL);
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
        type: Array,
        require: false,
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

const a1 = async () => {
    const data = await postModel.aggregate([
        {
            $group: {
              _id: '$author',
              count: { $sum: 1 } // Count occurrences
            }, 
        },
        {$limit: 3} , 
        {
            $sort: {
              count: -1 // Sort by count in descending order
            }
        }
    ])
    console.log(data)
    return data
}
// db.posts.aggregate([{$group : {_id: "$author", count: { $sum : 1}} } ] )


console.log(a1())

app.listen(PORT, () => {
    console.log(`Server listening`);
})
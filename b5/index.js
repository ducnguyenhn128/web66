const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bodyParser = require('body-parser');
const morgan = require('morgan');

// morgan('tiny')

const PORT = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/mindx');

const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
  });

app.listen(PORT, () => {
    console.log(`Server is listeningh at ${PORT}`);
})

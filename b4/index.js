const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const secretkey = 'ab240f90aba431402985eddc45f4d413a33ebc925575c558168a98b2c38033a6';

// ---------------------------------------------------------
// connect to mongoDB Movie database
mongoose.connect('mongodb://127.0.0.1:27017/movie')
// define schema: everything start with Schema
const filmSchema = new mongoose.Schema({
    title: {type: String, require: true},
    year: {type: String, requrie: true}
})
const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true}
})
// model is a class of Schema
const a1 = mongoose.model('phimmoi', filmSchema)
const userDB = mongoose.model('user', userSchema);

// ----------------------------------------------------


// middleware
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log('authHeader', req.headers);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secretkey, (err, user) => {
            console.log('err', err);
            if (err) {
                return res.status(403).json({ message: 'Token không hợp lệ' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Chưa xác thực' });
    }
}

// CRUD movie 
// ---------------------------------------------------

// Get All film
app.get('/', async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({message: 'Ko co du lieu'})
    }
      // Use the Film model to find all films in the collection
    const films = await a1.find({});
    // console.log(films)
    res.send(films)
})

// Get movie by ID
app.get('/watch/id/:id', authenticate, async (req, res) => {
    const id = req.params.id; 
    try {
        const movie = await a1.findById(id)
        if (!movie) {
            // Movie not found
            res.status(404).send('Movie not found');
            return;
        }
        // Send back the movie
        res.status(200).send(movie)
    } catch(err) {
        // handle error
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
    }
})

// Get movie by title
app.get('/watch/title/:title', authenticate, async (req, res) => {
    const title1 = req.params.title;
    const movie = await a1.find({title: title1})

    if (movie.length === 0) {
        // movie not found
        res.status(404).send('Movie not found')
        return;
    }

    res.status(200).send(movie)
})

// create a new movie
app.post('/movie/new/:title/:year' , authenticate, (req, res, next) => {
    const title = req.params.title;
    const year = req.params.year;

    a1.create({title, year})
        .then(() => {
            res.status(201).json({title, year})
        })
        .catch(err => console.log(err))

})

// update a movie
app.put('/movie/update/:id', authenticate, async (req, res) => {
 const id = req.params.id;
 const title = req.body.title;
 const year = req.body.year;
 const updatedMovieObject = {title, year};
 try {
    const foundMovie = await a1.findById(id);
    if (!foundMovie) {
        res.status(404).send('Can not find movie');
        return ;
    }
    // found movie
    const updatedMovie = await a1.findByIdAndUpdate(id, updatedMovieObject);
    res.send('Update Successful');
 } catch (err) {
    // handle error
    console.error(err);
    res.status(500).send('Internal Server Error');
    return;
 }

})
// delete a movie (by Id)
app.delete('/movie/delete/title/:title', authenticate, async (req, res) => {
    const title = req.params.title;
    const result = await a1.deleteOne({title: title});
    console.log(result);
    if (result.deletedCount ===  0 ) {
        // title not found
        res.status(404).send('Movie not found');
        return ;
    }
    res.status(204).send('Delete success')

})

// ---------------------------------------------------

// User: login - sign up
app.post('/login', async (req, res , next) => {

    // res.send(req.body);
    const { username, password } = req.body;


    if (!username || !password) {
        res.send('Thong tin dang nhap chua du')
    }
    //  Them cac truong hop khac

    // find usernam in DB
    let user = await userDB.findOne({username: username});
    console.log(user)
    // if user not found


    // founded user

    // compare password
    const matchedPassword = await bcrypt.compare(password, user.password);
    console.log(matchedPassword)
    if (matchedPassword) {
        // jwt token
        const payload = {
            userID: user.id,
            username: user.username,
        }
        
        const token = jwt.sign(payload, secretkey, {expiresIn: '30d'})
        res.status(200).json({token})
    } else {
        res.status(401).send('Sai mat khau')
    }

    // if (username === 'admin' && password === 'admin') {
    //     const token = jwt.sign({ username }, 'secretKey');
    //     res.json({ token });
    // } else {
    //     res.status(401).json({ message: 'Đăng nhập không thành công' });
    // }
})

app.post('/signup' , async (req, res, next) => {
    // await mongoose.connect('mongodb://127.0.0.1:27017/user')
    let username = req.body.username;
    let password = req.body.password;
    // hashing password
    const hashPassword = await bcrypt.hash(password, saltRounds)

    let newUser = {username, password: hashPassword};
    userDB.create(newUser)
        .then(() => {
            res.status(201).send(newUser)
        })
        .catch(err => console.log(err))
})


app.listen(PORT)
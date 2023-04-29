const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// connect to mongoDB database
const mongoDB = 'mongodb://127.0.0.1:27017/movie';
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// define schema
const filmSchema = new mongoose.Schema({
    title: {type: String, require: true},
    year: {type: String, requrie: true}
})

const a1 = mongoose.model('phimmoi', filmSchema)


// middleware
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log('authHeader', req.headers);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'secretKey', (err, user) => {
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


app.get('/watch/:id', async (req, res) => {
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


app.get('/', async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({message: 'Ko co du lieu'})
    }
      // Use the Film model to find all films in the collection
    const films = await a1.find({});
    // console.log(films)
    res.send(films)

})

app.post('/movie/new/:title/:year' , (req, res, next) => {
    const title = req.params.title;
    const year = req.params.year;

    a1.create({title, year})
        .then(() => {
            res.status(201).json({title, year})
        })
        .catch(err => console.log(err))

})

app.post('/login', (req, res , next) => {
    console.log('req', req);
    // res.send(req.body);
    const { username, password } = req.body;
    console.log('username', username);

    if (!username || !password) {
        res.send('Thong tin dang nhap chua du')
    }
    //  Them cac truong hop khac

    if (username === 'admin' && password === 'admin') {
        const token = jwt.sign({ username }, 'secretKey');
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Đăng nhập không thành công' });
    }
})

app.get('/freefilm', (req, res, next) => {
    res.send(db_free())
})

app.get('/spiderman', authenticate, (req, res, next) => {
    res.send('spiderman')
})

app.listen(PORT)
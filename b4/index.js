const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const mongoDB = 'mongodb://127.0.0.1:27017/movie';
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// define schema
const filmSchema = new mongoose.Schema({
    name: {type: String, require: true},
    year: {type: String, requrie: true}
})

const a1 = mongoose.model('phimmoi', filmSchema)

// a1.create({ name: 'In the new moon', year: '2010' } );
console.log('a')



// const db = [
//     { "id": 1, "name": "Titanic", "isFree": true },
//     { "id": 2, "name": "Avenger", "isFree": false },
//     { "id": 3, "name": "Iron Man", "isFree": false },
//     { "id": 4, "name": "Batman", "isFree": false },
//     { "id": 5, "name": "Iron Man 2", "isFree": false },
//     { "id": 6, "name": "Iron Man 3", "isFree": false },
//     { "id": 7, "name": "Tenet", "isFree": false },
//     { "id": 8, "name": "Inception", "isFree": true }
//   ]

// const db_free = () => {
//     return(db.filter(el => el.isFree === true))
// }

// console.log('Free film: ' , db_free());

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


app.get('/', async (req, res, next) => {

    if (!req.body) {
        res.status(400).json({message: 'Ko co du lieu'})
    }
      // Use the Film model to find all films in the collection
    const films = await a1.find({});
    console.log(films)
    res.send(films)

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
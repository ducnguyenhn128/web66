const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const generateKey = require('.//keyGeneration');
// const users = require('./userDB.json')
const users_data = fs.readFileSync('userDB.json');
const users = JSON.parse(users_data);
const app = express();
const PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let keyAuthentication;

// middle ware (authentication)
const authenticationMiddleware = (req, res, next) => {
    const authenToken = req.headers.key;
    const foundUser = users.findIndex((el) => el.key === authenToken);
    if (foundUser !== -1) {
        req.userIndex = foundUser;
        next();
    }
    res.status(404).send('Authen Fail');
};
// login
app.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    const foundUser = users.findIndex(
        (el) => el.username === username && el.password === password
    );

    if (foundUser !== -1) {
        keyAuthentication = generateKey();
        req.key = keyAuthentication;
        users[foundUser].key = keyAuthentication;
        fs.writeFileSync('userDB.json', JSON.stringify(users));
        // res.send(req.key);
        res.send(keyAuthentication);
        next();
    } else {
        // not found
        res.status(404).send();
    }
});
// about - get user information 
app.get('/user/about', authenticationMiddleware, (req, res, next) => {
    res.send(users[req.userIndex])
});
// update user info
app.put('/user/about', authenticationMiddleware, (req, res, next) => {
    const password1 = req.body.password;
    if (!password1) {
        return res.status(400).send('Bad request: password is missing');
    } else {
        // update user info
        users[req.userIndex].password = password1
        // write to database
        fs.writeFileSync('userDB.json', JSON.stringify(users));
        // send respond
        res.status(200).send('Update infomation successful')
    }
});


// b2
// example: http://localhost:3001/user/daniel/age/232?lte=true
app.get('/user/:name/age/:age', authenticationMiddleware, (req, res, next) => {
    const name1 = req.params.name.toLowerCase();
    const age = req.params.age;

    const lte = Boolean(req.query.lte);

    let result = [];

    // logic check

    if (lte) {
        for (let i = 0; i < users.length; i++) {
            if (
                users[i].name.toLowerCase().includes(name1) &&
                users[i].age <= age
            ) {
                result.push(users[i]);
            }
        }
    } else {
        for (let i = 0; i < users.length; i++) {
            if (
                users[i].name.toLowerCase().includes(name1) &&
                users[i].age > age
            ) {
                result.push(users[i]);
            }
        }
    }

    res.send(result);
});
 
app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT} `);
});

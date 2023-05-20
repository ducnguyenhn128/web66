const express = require('express');
const userCRUD = require('../model/user')
const router = express.Router();
const morgan = require('morgan')
morgan('short');
const authentication = require('./middleware')
const cookieParser = require('cookie-parser')


router.use(cookieParser())

router.get('/setCookie', (req, res)=> {
    res.cookie('sites2', 'anonystick.com');
    res.status(200).send('OK!!!')
})


// User Login
router.post('/login', userCRUD.login)

// testing api check login
router.get('/checklogin', authentication, (req, res) => {
    res.status(200).send('LOGIN OK')
})


// After Login
router.use(authentication)
router.get('/all', userCRUD.get)
router.get('/:id', userCRUD.getById)
router.post('/', userCRUD.post)
router.put('/:id', userCRUD.put)
router.delete('/:id', userCRUD.delete)


module.exports = router
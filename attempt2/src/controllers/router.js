const express = require('express');
const {userCRUD, userProfile } = require('../model/user')
const router = express.Router();
const morgan = require('morgan')
morgan('short');
const authentication = require('./middleware')
const cookieParser = require('cookie-parser')
router.use(cookieParser())

router.get('/profile', authentication, userProfile)

// User Login
router.post('/login', userCRUD.login)

// testing api check login
router.get('/checklogin', authentication, (req, res) => {
    res.status(200).send(req.user)
})


// After Login
router.use(authentication)
router.get('/all', userCRUD.get)
router.get('/:id', userCRUD.getById)
router.post('/', userCRUD.post)
router.put('/:id', userCRUD.put)
router.delete('/:id', userCRUD.delete)




module.exports = router
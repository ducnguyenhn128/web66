const express = require('express');
const {userCRUD, userProfile } = require('../model/user')
const router = express.Router();
const morgan = require('morgan')
morgan('short');
const authentication = require('./middleware')
const cookieParser = require('cookie-parser')
router.use(cookieParser())

// Regiter an user
router.post('/', userCRUD.post)


// User Login
router.post('/login', userCRUD.login)
// User Logout
router.post('/logout', (req, res) => {

    res.clearCookie('jwtToken', {
        httpOnly: true,
        secure: true
      });
    res.status(200).send('Logout done');
})

// testing api check login
router.get('/check-login', authentication, (req, res) => {
    if (req.user) {
        // User is logged in
        res.status(200).json({ isLoggedIn: true });
      } else {
        // User is not logged in
        res.status(200).json({ isLoggedIn: false });
      }
})

router.get('/profile', authentication, userProfile)

// After Login
router.use(authentication)
router.get('/all', userCRUD.get)
router.get('/:id', userCRUD.getById)
router.put('/:id', userCRUD.put)
router.delete('/:id', userCRUD.delete)



module.exports = router
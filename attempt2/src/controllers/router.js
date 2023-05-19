const express = require('express');
const userCRUD = require('../model/user')
const router = express.Router();
const morgan = require('morgan')
morgan('short');
const authentication = require('./middleware')

router.post('/login', userCRUD.login)

router.use(authentication)

router.get('/all', userCRUD.get)
router.get('/:id', userCRUD.getById)
router.post('/', userCRUD.post)
router.put('/:id', userCRUD.put)
router.delete('/:id', userCRUD.delete)




module.exports = router
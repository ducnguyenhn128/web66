const express = require('express');
const userCRUD = require('../model/user')
const router = express.Router();
const morgan = require('morgan')
morgan('short');


// router.get('/', (req, res) => {
//     res.status(200).send('Haloo again')
// })

router.get('/all', userCRUD.get)
router.get('/:id', userCRUD.getById)
router.post('/', userCRUD.post)
router.put('/:id', userCRUD.put)
router.delete('/:id', userCRUD.delete)

module.exports = router
// ============================================================================
// Profile User (Other user)
// 1. Get a profile: /user/:id
// 2. Follow an user /user/:id/follow
// 3. Unfollow an user /user/:id/unfollow

const express = require('express');
const morgan = require('morgan')
morgan('short');
const authentication = require('./middleware');
const profileCRUD = require('../model/profile')
// const cookieParser = require('cookie-parser')
// router.use(cookieParser())

const profileRouter = express.Router();

profileRouter.get('/:id', profileCRUD.get)

module.exports = profileRouter;
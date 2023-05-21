// ============================================================================
// Post Router
// 1. Get recent post from user you follow
// 2. Get recent post globally
// 3. Create a post: /post
// 4. Get a post by id
// 5. Update a post
// 6. Delete a post

const express = require('express');
const authentication = require('./middleware');
const postCRUD = require('../model/post');
// const profileCRUD = require('../model/profile')

const postRouter = express.Router();
postRouter.use(authentication)

postRouter.post('/', postCRUD.post)
postRouter.get('/:id', postCRUD.getPostById)


module.exports = postRouter;
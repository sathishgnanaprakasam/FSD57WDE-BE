// import the express router
const express = require('express');
const userController = require('../controllers/userController');
// create a new router
const router = express.Router();
const auth = require('../middleware/auth');

// define the routes
// prefix: /users
router.post('/', userController.register); // POST /users

router.get('/', auth.checkAuth, auth.isAdmin, userController.getUsers); // GET /users


router.post('/login', userController.login); // POST /users/login

router.post('/logout', auth.checkAuth, userController.logout); // POST /users/logout
router.get('/profile', auth.checkAuth, userController.getUser); // GET /users/profile
router.put('/profile', auth.checkAuth, userController.updateUser); // PUT /users/profile
router.delete('/profile', auth.checkAuth, userController.deleteUser); // DELETE /users/profile

router.get('/:id', auth.checkAuth, auth.isAdmin, userController.getUserById); // GET /users/:id
router.put('/:id', auth.checkAuth, auth.isAdmin, userController.updateUserById); // PUT /users/:id
router.delete('/:id', auth.checkAuth, auth.isAdmin, userController.deleteUserById); // DELETE /users/:id

// export the router
module.exports = router;
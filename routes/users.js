// Importing necessary node modules
const express = require('express');


// Importing controller module
const controller = require('../controllers/usersController');


// Initializing router variable
const router = express.Router();

// Setting up all the routes for this specific router
// POST for signing in
router.post('/', controller.login);

// POST for creating a user
router.post('/create', controller.signup);

// GET for retrieving a user
router.get('/users/:userId', controller.get_user);

// PUT for updating a user
router.put('/users/:userId', controller.update_user);

// DELETE for deleting a user
router.delete('/users/:userId', controller.delete_user);


module.exports = router;
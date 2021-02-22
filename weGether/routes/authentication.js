const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserController = require("./../controllers/UserControllers");

/* TODO: Login */
router.get('/login', UserController.login);
router.post('/login', UserController.authenticate);

/**
 * TODO: Logout
 */
router.get('/logout', UserController.logout);

module.exports = router;
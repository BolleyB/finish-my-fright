const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/usersController');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/', usersCtrl.index);

// GET User Redirect
router.get('/redirect', usersCtrl.redirect);

// GET User Profile
router.get('/:id', usersCtrl.showOne);

// GET All User Profiles
router.get('/all', usersCtrl.showAll)

// PUT FOR UPDATING STORY
router.put('/:id', ensureLoggedIn, usersCtrl.update);

module.exports = router;

const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/usersController');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET All User Profiles
router.get('/all', usersCtrl.showAll)

// GET User Redirect
router.get('/redirect', usersCtrl.redirect);

/* GET users listing. */
router.get('/', usersCtrl.index);

// GET User Profile
router.get('/:id', usersCtrl.showOne);

// PUT FOR UPDATING STORY
router.put('/:id', ensureLoggedIn, usersCtrl.update);

module.exports = router;

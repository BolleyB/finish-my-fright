var express = require('express');
var router = express.Router();

const storiesCtrl = require('../controllers/storyController');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET STORY PAGE
router.get('/', storiesCtrl.index);

// GET NEW STORY PAGE
router.get('/new', ensureLoggedIn, storiesCtrl.new);

// GET FOR EDIT PAGE
router.get('/:id/edit', ensureLoggedIn, storiesCtrl.edit);

// GET FOR SHOW SPECIFIC STORY
router.get('/:id', storiesCtrl.show);

// POST NEW STORY
router.post('/', ensureLoggedIn, storiesCtrl.create);

// PUT FOR UPDATING STORY
router.put('/:id', ensureLoggedIn, storiesCtrl.update);

// DELETE FOR DELETING STORY
router.delete('/:id', ensureLoggedIn, storiesCtrl.delete);

module.exports = router;
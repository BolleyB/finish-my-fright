var express = require('express');
var router = express.Router();

const storiesCtrl = require('../controllers/storyController');

// GET STORY PAGE
router.get('/', storiesCtrl.index);

// GET NEW STORY PAGE
router.get('/new', storiesCtrl.new);

// GET FOR SHOW SPECIFIC STORY
router.get('/:id', storiesCtrl.show);

// POST NEW STORY
router.post('/', storiesCtrl.create);

module.exports = router;
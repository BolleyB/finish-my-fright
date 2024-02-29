const express = require('express');
const router = express.Router();
const StoryController = require('../../controllers/storyController.js');

// get all stories
router.get('/stories', StoryController.getAllstories);

module.exports = router;
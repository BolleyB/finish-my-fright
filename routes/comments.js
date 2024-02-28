const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/commentsController')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/stories/:id/comments', ensureLoggedIn, commentsCtrl.create)
router.delete('/stories/:id/comments/:commentid', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;
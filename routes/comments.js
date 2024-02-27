const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/commentsController')

router.post('/stories/:id/comments', commentsCtrl.create)
router.delete('/stories/:id/comments/:commentid', commentsCtrl.delete);

module.exports = router;
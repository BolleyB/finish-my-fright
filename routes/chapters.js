const express = require('express');
const router = express.Router();
const chaptersCtrl = require('../controllers/chaptersController')

router.post('/stories/:id/chapters', chaptersCtrl.create)
router.delete('/stories/:id/chapters/:chapterid', chaptersCtrl.delete);

module.exports = router;
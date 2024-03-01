const express = require("express");
const router = express.Router();
const chaptersCtrl = require("../controllers/chaptersController");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/stories/:id/chapters", ensureLoggedIn, chaptersCtrl.create);
router.delete(
  "/stories/:id/chapters/:chapterid",
  ensureLoggedIn,
  chaptersCtrl.delete
);

module.exports = router;

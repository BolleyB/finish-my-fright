const express = require('express');
const router = express.Router();

// Define routes for guest users

// GET request to the home page for guest users
router.get('/', function(req, res) {
    res.render('guest/index', { title: 'Guest Home Page' });
});

// GET request to a specific guest profile page
router.get('/profile/:id', function(req, res) {
    const guestId = req.params.id;
    // Fetch guest information from the database based on guestId
    // Render the guest profile page with the retrieved information
    res.render('guest/profile', { title: 'Guest Profile Page', guestId: guestId });
});

// Other routes for guest functionality can be added here

module.exports = router;

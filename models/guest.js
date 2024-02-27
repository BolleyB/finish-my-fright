// guest.js

const mongoose = require('mongoose');

// Define guest schema
const guestSchema = new mongoose.Schema({
    
});

// Create Guest model
const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;

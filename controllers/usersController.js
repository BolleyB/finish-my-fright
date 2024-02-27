const Story = require('../models/story');

module.exports = { 
    index
}

async function index(req, res) {
    res.render('user', {title: 'User Login'});
}
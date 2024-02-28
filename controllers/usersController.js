const Story = require('../models/story');

module.exports = { 
    index,
    showOne,
    showAll,
    redirect,
}

async function index(req, res) {
    res.render('user', {title: 'User Login'});
}

function redirect(req, res) {
    res.render(`userProfiles/profile`, {title: 'User Profile'})
}

async function showOne(req, res) {
    res.render(`userProfiles/profile`, {title: 'User Profile'})
}

async function showAll(req, res) {
    res.render(`userProfiles/index`, {title: 'User Profile'})
}
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

// HOW TO ACCESS USER ID TO REDIRECT TO SPECIFIC USER ?
async function redirect(req, res) {
    try { const userId = req.user ? req.user.id : undefined
        console.log(userId);
        if (!userId)
        {
            res.redirect('/users/all');
        }
        else {
            await res.redirect(`/users/${userId}`)
    }}
    catch (err)
    {
        res.send(err);
    }
}

// SHOW ONE IS FOR USER PROFILE
// HOW TO ACCESS USER ID TO REDIRECT TO SPECIFIC USER ?
async function redirect(req, res) {
    try { const userId = req.user.id;
    await res.redirect(`/users/${userId}`)
    }
    catch (err)
    {
        res.send(err);
    }
}

// SHOW ONE IS FOR USER PROFILE
async function showOne(req, res) {
    res.render(`userProfiles/profile`, {title: 'User Profile'})
}

// SHOW ALL IS FOR ALL PROFILES
async function showAll(req, res) {
    res.render(`userProfiles/index`, {title: 'All User Profiles'})
}
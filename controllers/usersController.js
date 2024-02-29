const Story = require('../models/story');
const User = require('../models/user')

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

async function showOne(req, res) {
    try {
        const userId = req.params.id ? req.params.id : undefined
        if (!userId)
        {
            res.redirect('/users/all');
        }
        else {
        const profUser = await User.findById(userId);
        console.log()
        res.render(`userProfiles/profile`, {profUser})
        }
    } catch (err) {
        console.log(err);
    }
}

// SHOW ALL IS FOR ALL PROFILES
async function showAll(req, res) {
    res.render(`userProfiles/index`, {title: 'All User Profiles'})
}

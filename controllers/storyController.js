const Story = require('../models/story');

module.exports = {
    index,
    new: newStory,
    create,
}

async function index(req, res) {
    res.render('stories/index', {title: 'Stories'});
}

function newStory(req, res) {
    res.render('stories/new', { errorMsg: ''});
}

async function create(req, res) {
    console.log('Create Function')
}
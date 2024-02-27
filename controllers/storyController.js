const Story = require('../models/story');

module.exports = {
    index,
    new: newStory,
    create,
    show
}

async function index(req, res) {
    const stories = await Story.find({});
    res.render('stories/index', {title: 'Stories', stories});
}

function newStory(req, res) {
    res.render('stories/new', { errorMsg: ''});
}

async function create(req, res) {
    req.body.title = req.body.title.trim();
    try {
        const newStory = await Story.create(req.body);
        console.log('Story Created');
        res.redirect(`/stories/${newStory._id}`);
    } catch (err) {
        console.error(err);
        res.render('stories/new', { errorMsg: 'Error creating the story.' });
    }
}

async function show(req, res) {
    try {
        const story = await Story.findById(req.params.id);
        res.render('stories/show', { title: 'Story Details', story})
    } catch (err) {
        console.log(err);
        res.redirect('/stories');
    }
}
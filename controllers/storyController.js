const Story = require('../models/story');

module.exports = {
    index,
    new: newStory,
    create,
    show,
    edit,
    update
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
    //adds user to information
    req.body.user = req.user.id;
    try {
        const newStory = await Story.create(req.body);
        console.log('Story Created');
        res.redirect(`/stories/${newStory._id}`);
    } catch (err) {
        console.error(err);
        // res.render('stories/new', { errorMsg: 'Error creating the story.' });
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

async function edit(req, res) {
    const story = await Story.findById(req.params.id);

    res.render('stories/edit', {story})
}

async function update(req, res) {
    try {
        const story = await Story.findById(req.params.id);

        await Story.updateOne({ _id: req.params.id }, { body: req.body.body });
        res.redirect(`/stories/${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
}
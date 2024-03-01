const Story = require('../models/story');
const User = require('../models/user');

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
        await updateUser(req.user.id, newStory._id);
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
        const author = await User.findById(story.user);
        res.render('stories/show', { title: 'Story Details', story, author})
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

// WORKS NEED TO ADD TO COMMENTS AND CHAPTERS
async function updateUser(id, storyId) {
    try {
    const user = await User.findById(id);
    user.interaction.stories.push(storyId);
    await user.save();
    }
    catch (err) {
        console.log(err);
    }
}
const Story = require('../models/story');
const User = require('../models/user');

async function updateUser(id, storyId) {
    try {
        await User.updateOne({ _id: id }, { $push: { 'interaction': { stories: storyId } } });
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllStories: async (req, res) => {
        try {
            const stories = await Story.find();
            res.json(stories);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    index: async (req, res) => {
        const stories = await Story.find({});
        res.render('stories/index', { title: 'Stories', stories });
    },
    new: (req, res) => {
        res.render('stories/new', { errorMsg: '' });
    },
    create: async (req, res) => {
        req.body.title = req.body.title.trim();
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
    },
    show: async (req, res) => {
        try {
            const story = await Story.findById(req.params.id);
            res.render('stories/show', { title: 'Story Details', story });
        } catch (err) {
            console.log(err);
            res.redirect('/stories');
        }
    },
    edit: async (req, res) => {
        const story = await Story.findById(req.params.id);
        res.render('stories/edit', { story });
    },
    update: async (req, res) => {
        try {
            await Story.updateOne({ _id: req.params.id }, { body: req.body.body });
            res.redirect(`/stories/${req.params.id}`);
        } catch (err) {
            console.log(err);
        }
    }
};

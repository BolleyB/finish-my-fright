const Story = require('../models/story');

module.exports = {
    create,
}

async function create(req, res) {
    try {
    const story = await Story.findById(req.params.id);
    story.comments.push(req.body);
    await story.save();
    res.redirect(`/stories/${req.params.id}`);
    }
    catch (err) {
        console.log(err);
    }
}
const Story = require('../models/story');

module.exports = {
    create
}

async function create(req, res) {
    const story = await Story.findById(req.params.id);
    story.chapters.push(req.body);
    //ADDED TO SORT BY DATE?
    // flight.destinations.sort('date');
    await story.save();
    res.redirect(`/stories/${story._id}`);
}


const Story = require('../models/story');

module.exports = {
    create,
    delete: deleteChapter
}

async function create(req, res) {
    const story = await Story.findById(req.params.id);
    story.chapters.push(req.body);
    //ADDED TO SORT BY DATE?
    // flight.destinations.sort('date');
    await story.save();
    res.redirect(`/stories/${story._id}`);
}

async function deleteChapter(req, res) {
    // Need to add the user check
    const story = await Story.findById(req.params.id);

    if (!story) return res.redirect('/story');
    // Remove the chapter using the remove method available on Mongoose arrays
    await story.chapters.remove(req.params.chapterid);
    // Save the updated movie doc
    await story.save();
    // Redirect back to the movie's show view
    res.redirect(`/stories/${story._id}`);
  }
const Story = require('../models/story');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteChapter
}

async function create(req, res) {
    try {
    const story = await Story.findById(req.params.id);
    req.body.user = req.user.id;
    story.chapters.push(req.body);
    await story.save();

    // GRABS CHAPTER ID AND UPDATES USER
    const newChapterId = story.chapters[story.chapters.length - 1]._id;
    await updateUser(req.user.id, newChapterId);

    res.redirect(`/stories/${story._id}`);
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteChapter(req, res) {
    try {
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
    catch (err) { 
        console.log(err);
        res.redirect(`/stories/${req.params.id}`);
    }
  }

  async function updateUser(id, chapterId) {
    try {
    const user = await User.findById(id);
    user.interaction.chapters.push(chapterId);
    await user.save();
    }
    catch (err) {
        console.log(err);
    }
}
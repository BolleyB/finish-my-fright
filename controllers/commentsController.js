const Story = require('../models/story');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment,
}

async function create(req, res) {
    try {
    const story = await Story.findById(req.params.id);
    req.body.user = req.user.id;
    story.comments.push(req.body);

    // GRABS COMMENT ID AND UPDATES USER
    const newCommentId = story.comments[story.comments.length - 1]._id;
    await updateUser(req.user.id, newCommentId);

    await story.save();
    res.redirect(`/stories/${req.params.id}`);
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteComment(req, res) {
    try {
    // Need to add the user check
    const story = await Story.findById(req.params.id);

    if (!story) return res.redirect('/story');
    // Remove the chapter using the remove method available on Mongoose arrays
    await story.comments.remove(req.params.commentid);
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

  async function updateUser(id, commentId) {
    try {
    const user = await User.findById(id);
    user.interaction.comments.push(commentId);
    await user.save();
    }
    catch (err) {
        console.log(err);
    }
}
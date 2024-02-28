const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    // Doesn't need to ref to story, will embed
    // users id saved as ref
}, {
    timestamps: true
})

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    //users id saved as ref
}, {
    timestamps: true
})

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    theme: {
        type: String,
        //ADD ENUM? ['Horror', 'Nostalgic Spooky', 'Comedy Horror', 'Dramatic Horror']
    },
    chapters:[chapterSchema],
    comments:[commentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    // Ref: Chapters as an array?
    // Ref: User ID Reference
    // Time Created
    // Themes
}, {
    timestamps: true
})


module.exports = mongoose.model('Story', storySchema);
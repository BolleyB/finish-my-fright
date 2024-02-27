const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    body: {
        type: String,
        required: true
    }
    // Doesn't need to ref to story, will embed
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
    // Ref: Chapters as an array?
    // Ref: User ID Reference
    // Time Created
    // Themes
}, {
    timestamps: true
})


module.exports = mongoose.model('Story', storySchema);
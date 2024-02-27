const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    }
    // Ref: Chapters as an array?
    // Ref: User ID Reference
    // Time Created
    // Themes
}, {
    timestamps: true
})

const chapterSchema = new Schema({
    body: {
        type: String,
        required: true
    }
    // Ref: To Story
}, {
    timestamps: true
})

module.exports = mongoose.model('Story', storySchema);
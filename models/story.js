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
}, {
    timestamps: true
})


module.exports = mongoose.model('Story', storySchema);
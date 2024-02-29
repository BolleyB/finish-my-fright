const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  displayName: String,
  aboutMe: String,
  displayEmail: String,
}, {
  timestamps: true
})

const interactionSchema = new Schema({
  stories: [{ type: Schema.Types.ObjectId,
  ref: 'Story',
  required: true }],
  comments: [String],
  chapters: [String]
}, { 
  timestamps: true
});

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  profile: profileSchema,
  interaction: interactionSchema,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
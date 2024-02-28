const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userName: String,
  aboutMe: String,
}, {
  timestamps: true
})

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  profile: [profileSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
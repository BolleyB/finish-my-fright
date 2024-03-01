const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const { default: test } = require('node:test');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },

    async function(accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({ googleId: profile.id});
            if (user) return cb(null, user);
            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                profile: {
                    displayName: profile.displayName,
                    aboutMe: 'About Me',
                    displayEmail: profile.emails[0].value,
                },
                interaction: {
                },
                stories: {
                },
            });
            return cb(null,user);
        }   catch (err) {
            return cb(err);
        }
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
})

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
});
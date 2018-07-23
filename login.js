'use strict';
const router = require('express').Router();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const SpotifyClient = require('./clients/spotify');

const config = require('./config');

passport.use(new SpotifyStrategy({
    clientID: config.Spotify.clientId,
    clientSecret: config.Spotify.clientSecret,
    callbackURL: config.Spotify.redirectUri
}, (accessToken, refreshToken, expiresIn, profile, done) => {
    SpotifyClient.init(accessToken, refreshToken, expiresIn, profile);
    return done(null, profile);
}));

router.get('/spotify', passport.authenticate('spotify'), (req, res) => {});
router.get('/spotify/cb', 
    passport.authenticate('spotify', { failureRedirect: '/fail'}), 
    (req, res) => {
        res.redirect('/pass');
    });

module.exports.router = router;
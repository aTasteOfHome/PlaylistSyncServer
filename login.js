'use strict';
const router = require('express').Router();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyClient = require('./clients/spotify');

const config = require('./config');

passport.use(new SpotifyStrategy(config.Spotify, 
    (accessToken, refreshToken, expiresIn, profile, done) => {
        SpotifyClient.init(accessToken, refreshToken, expiresIn, profile);

        return done(null, profile);
    })
);

router.get('/spotify', passport.authenticate('spotify'), (req, res) => {});
router.get('/spotify/cb', 
    passport.authenticate('spotify', { failureRedirect: '/fail'}), 
    (req, res) => {
        res.redirect('/pass');
    });

module.exports.router = router;
'use strict';
const express = require('express');
const SpotifyClient = require('./clients/spotify');
const passport = require('passport');
const app = express();
const logger = require('./logger');
const config = require('./config');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((obj, done) => done(null, obj));

app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Hello World'));
app.get('/fail', (req, res) => {
  logger.log('Something failed');
  logger.log('%o', res);
  res.send('Stuff failed');
});
app.get('/pass', (req, res) => {
  logger.log('Something passed');
  logger.log('%o', res);
  res.send('Stuff passed!');
});
app.use('/spotify', SpotifyClient.router);

app.listen(config.port);
logger.log(`Listening on port ${config.port}...`);

//organize by application? or organize by actions?

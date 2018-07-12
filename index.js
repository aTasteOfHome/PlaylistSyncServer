'use strict';
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
const login = require('./login');
const config = require('./config');

app.get('/', (req, res) => res.send('Hello World'));
app.get('/fail', (req, res) => res.send('Stuff failed'));
app.get('/pass', (req, res) => res.send('Stuff passed!'));
app.use('/auth', login.router);

app.listen(config.port);
console.log(`Listening on port ${config.port}...`);

//organize by application? or organize by actions?

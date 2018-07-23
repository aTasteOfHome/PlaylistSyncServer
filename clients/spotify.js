'use strict';
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../config');

class SpotifyClient {
    constructor() {}

    init(accessToken, refreshToken, expiresIn, profile) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.profile = profile;
        this.config = config.Spotify;
        this.api = new SpotifyWebApi({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            redirectUri: this.config.redirectUri
        });
        this.api.setAccessToken(accessToken);
    }
}

module.exports = new SpotifyClient();
'use strict';

class SpotifyClient {
    constructor(accessToken, refreshToken, expiresIn, profile) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.profile = profile;
    }

    init(accessToken, refreshToken, expiresIn, profile) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.profile = profile;
    }
}

exports.SpotifyClient = new SpotifyClient();
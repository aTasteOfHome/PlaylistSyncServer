'use strict';
const fs = require('fs');

function log(message, file) {
    message = `${new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})}: ${message}`;

    if (file) {
        fs.appendFile(
            `${file}.log`,
            message + '\n'
        );
    }
}

module.exports = { log };
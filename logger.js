'use strict';
const fs = require('fs');

function log(file, message) {
    fs.appendFile(
        `${file}.log`,
        `${new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})}:${message}\n`
    );
}

module.exports = { log };
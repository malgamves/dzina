'use strict';

const data = {
    names: require('./names.json'),
    nouns: require('./nouns.json')
}

function generate() {
    const randomOne = Math.floor(Math.random() * data.nouns.length)
    const randomTwo = Math.floor(Math.random() * data.names.length)
    const randomNum = Math.floor(Math.random() * 100 )
    return `${data.nouns[randomOne]}${data.names[randomTwo]}${randomNum}`;
    
};

module.exports = {
    generate: generate
}


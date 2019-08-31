'use strict';

const data = {
    names: require('./names.json'),
    nouns: require('./nouns.json')
}

function setNouns(nouns){
    data.nouns = nouns
};

function setNames(names){
    data.names = names
};

function generate() {
    const randomOne = Math.floor(Math.random() * data.nouns.length)
    const randomTwo = Math.floor(Math.random() * data.names.length)
    const randomNum = Math.floor(Math.random() * 100 )
    console.log(`${data.nouns[randomOne]}${data.names[randomTwo]}${randomNum}`);
    return `${data.nouns[randomOne]}${data.names[randomTwo]}${randomNum}`
};

module.exports = {
    setNames: setNames,
    setNouns: setNouns,
    generate: generate
}


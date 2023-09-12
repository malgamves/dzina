'use strict';

import * as names from '../names.json'
import * as nouns from '../nouns.json'


interface Data {
    names: string[],
    nouns: string[]
}

const data: Data  = {
    names: names,
    nouns: nouns
}

function generate(): string {
    const randomOne: number = Math.floor(Math.random() * data.nouns.length)
    const randomTwo: number = Math.floor(Math.random() * data.names.length)
    const randomNum: number = Math.floor(Math.random() * 100 )
    return `${data.nouns[randomOne]}${data.names[randomTwo]}${randomNum}`;
    
};

export = {
    generate: generate
}


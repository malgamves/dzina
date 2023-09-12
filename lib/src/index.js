'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const names_json_1 = __importDefault(require("../names.json"));
const nouns_json_1 = __importDefault(require("../nouns.json"));
const data = {
    names: names_json_1.default,
    nouns: nouns_json_1.default
};
function generate() {
    const randomOne = Math.floor(Math.random() * data.nouns.length);
    const randomTwo = Math.floor(Math.random() * data.names.length);
    const randomNum = Math.floor(Math.random() * 100);
    return `${data.nouns[randomOne]}${data.names[randomTwo]}${randomNum}`;
}
;
module.exports = {
    generate: generate
};
//# sourceMappingURL=index.js.map
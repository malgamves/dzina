'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const names = __importStar(require("../names.json"));
const nouns = __importStar(require("../nouns.json"));
const data = {
    names: names,
    nouns: nouns
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
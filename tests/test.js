'use strict';

const { generate } = require('../index');

const expect = require('chai').expect;

describe('Check if a name was generated', () => {
            it('Should generate a name', () => {    
                var nameGenarated = generate();    
                //expect(nameGenarated)
                expect(nameGenarated.length).to.be.above(0);
            });

            it('Should be a mixture of text and numbers', () => {
                var pattern = /^[0-9a-zA-Z]+$/;
                var nameGenarated = generate();    

                expect(nameGenarated).to.match(pattern);
            });
});
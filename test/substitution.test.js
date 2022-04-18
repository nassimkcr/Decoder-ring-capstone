// Write your tests here!
const {expect} =  require('chai');
const {substitution} = require('../src/substitution');

describe('substitution', ()=>{
    it('it should returns false if the given alphabet is not exactly 26 characters long', ()=>{
        const message = "alpha";
        const alphabet = "xyzalmsj";
        const actual = substitution(message, alphabet)
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it('it correctly translates the given phrase, based on the alphabet given to the function.', ()=>{
        const message = "alpha"
        const alphabet = "zabwvutsrqponmlkjihgfedcyx"
        const actual = substitution(message, alphabet)
        const expected = "zoksz";
        expect(actual).to.equal(expected)
    })
    it('It returns false if there are any duplicate characters in the given alphabet.', ()=>{
        const message = "alpha"
        const alphabet = "ztbwvutsrqponmlkjihgfedcyx"
        const actual = substitution(message, alphabet)
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it('It maintains spaces in the message, before and after encoding or decoding.', ()=>{
        const message = "al pha"
        const alphabet = "zabwvutsrqponmlkjihgfedcyx"
        const actual = substitution(message, alphabet)
        const expected = "zo ksz";
        expect(actual).to.equal(expected)
    })
    it('It ignores capital letters', ()=>{
        const message = "AlPha"
        const alphabet = "zabwvutsrqponmlkjihgfedcyx"
        const actual = substitution(message, alphabet)
        const expected = "zoksz";
        expect(actual).to.equal(expected)
    })

    
})
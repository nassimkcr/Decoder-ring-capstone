// Write your tests here!
const {expect} = require("chai")
const {caesar} = require("../src/caesar")

describe("Ceasar", ()=>{
    it("should return false if shift is not present", ()=>{
        const input = 'nassim';
        const expected = false;
        const actual = caesar(input)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is 0", ()=>{
        const input = 'nassim';
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is more than 25", ()=>{
        const input = 'nassim';
        const shift = 55;
        const expected = false;
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is less than -25", ()=>{
        const input = 'nassim';
        const shift = -45;
        const expected = false;
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should encode an input ignoring capital letters", ()=>{
        const input = 'NaSsim';
        const shift = 1;
        const expected = "obttjn";
        const actual = caesar(input, shift)
        
        expect(actual).to.equal(expected)
    })
    
    it("should encode an input that include letters in the end of the alphabet ", ()=>{
        const input = 'maximize';
        const shift = 4;
        const expected = "qebmqmdi";
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("maintain space and other special characters when encoding ", ()=>{
        const input = 'an ant.';
        const shift = 1;
        const expected = "bo bou.";
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    
    
})

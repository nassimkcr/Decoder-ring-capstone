// Write your tests here!
const {expect} = require("chai")
const {polybius} = require("../src/polybius")

describe("polybius", ()=>{
    it("When encoding, it translates the letter i and j to 42", ()=>{
        const input = "jimmy"
        const actual = polybius(input)
        const expected = "4242232345"
        expect(actual).to.equal(expected)
    })
    it("When decoding, it translates the letter 42 to (i/j)", ()=>{
        const input = "4242232345"
        const encode = false;
        const actual = polybius(input, encode)
        const expected = "(i/j)(i/j)mmy"
        expect(actual).to.equal(expected)
    })
    it("it ignores capital letters", ()=>{
        const input = "ThiNkful"
        const actual = polybius(input)
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("maintain spaces in input when encoding", ()=>{
        const input = "Think ful"
        const actual = polybius(input)
        const expected = "4432423352 125413"
        expect(actual).to.equal(expected)
    })
    it("maintain spaces in input when decoding", ()=>{
        const input = "3251131343 2543241341"
        const encode = false
        const actual = polybius(input, encode)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    
})

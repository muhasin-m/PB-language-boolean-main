const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))


describe('1. What type', () => {
    test('loose and strict comparison between 3 and "3"', () => {
        expect(content.includes(`3=='3'`)||content.includes(`3=="3"`)).toBeTruthy();
        expect(content.includes(`3==='3'`)||content.includes(`3==="3"`)).toBeTruthy();
    })

    test('Which is used to compare the VALUE', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(2);
    })

    test('Which is used to compare the VALUE and TYPE', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(7);
    })

    test('Which is used to ASSIGN a value', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(9);
    })
})

describe('2. Not', () => {
    test('Code was changed to print "good evening"', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith("good evening");
        expect(content.includes('!myVar')).toBeTruthy();
    })
})

describe('3. Short Circuit', () => {
    test('`firstName` must be "John"', () => {
        const solution = rewire("../solution");
        const firstName = solution.__get__("firstName");
        expect(firstName).toEqual('John');
        expect(content.includes(`''||'John'||0`));
    })

    test('`emptyStr` must be ""', () => {
        const solution = rewire("../solution");
        const emptyStr = solution.__get__("emptyStr");
        expect(emptyStr).toEqual('');
        expect(content.includes(`''&&false&&'HelloWorld'`));
    })

    test('`zero` must be `0`', () => {
        const solution = rewire("../solution");
        const zero = solution.__get__("zero");
        expect(zero).toEqual(0);
        expect(content.includes(`''||false||0`));
    })

    test('`seven` must be `7`', () => {
        const solution = rewire("../solution");
        const seven = solution.__get__("seven");
        expect(seven).toEqual(7);
        expect(content.includes(`75&&'nine'&&7`));
    })
})
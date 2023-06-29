// run test using "npx jest"
const { Triangle, Circle, Square } = require('../lib/shapes.js');

describe('Triangle', () => {
    it('should take new color "green" as color attribute, with text "TST" as value', () => {
        const shape = new Triangle("green", "black", "TST");
        expect(shape.render()).toEqual(`<polygon points="150,20 40,180 260,180" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="black">TST</text>`);
    })
})

describe('Circle', () => {
    it('should take new color "red" as color attribute, with text "LFO" as value', () => {
        const shape = new Circle("red", "black", "LFO");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="black">LFO</text>`);
    })
})

describe('Square', () => {
    it('should take new color "blue" as color attribute, with text "NXS" as value', () => {
        const shape = new Square("blue", "black", "NXS");
        expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="black">NXS</text>`);
    })
})

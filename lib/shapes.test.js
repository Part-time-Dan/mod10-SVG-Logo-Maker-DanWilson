// run using "npx jest"
const Triangle = require('../lib/shapes.js');

describe('Triangle', () => {
    it('should take new color "blue" as color attribute', () => {
        const shape = new Triangle();
        shape.shapeColor = "blue";
        expect(shape.render()).toEqual(`
        <polygon points="150,20 40,180 260,180" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `);

    console.log(shape.render())

    })
})

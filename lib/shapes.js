// create "shapes" constructor to pass user inputs into class objects
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        throw new Error('Shape can not be rendered.');
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `<polygon points="150,20 40,180 260,180" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// function that will pass through inquirer data and write the SVG render code for browser based on which shape class matches
function generateSVG(data) {

    if (`${data.shape}` == 'circle') {
        const circle = new Circle(`${data.shapeColor}`, `${data.textColor}`, `${data.text}`);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circle.render()}</svg>`

    } else if (`${data.shape}` == 'triangle') {
        const triangle = new Triangle(`${data.shapeColor}`, `${data.textColor}`, `${data.text}`);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${triangle.render()}</svg>`

    } else {
        const square = new Square(`${data.shapeColor}`, `${data.textColor}`, `${data.text}`);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${square.render()}</svg>`
    }
};
    
module.exports = {Triangle, Circle, Square, generateSVG};

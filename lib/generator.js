const { Triangle, Circle, Square } = require('../lib/shapes.js');

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

module.exports = generateSVG;
// create shapes constructor to take user inputs
class Shape {
    constructor(type, shapeColor) {
        this.type = type; //store the text that chooses the shape type 'circle', 'triange', or 'square'
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Shape can not be rendered.');
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super('circle', shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}




// class Triangle extends Shape {
//     constructor(type) {
//         super('triangle');
//     }

//     render() {
//         return `<polygon points="150,20 40,180 260,180" fill="${data.shapeColor}" />`
//     }
// }

// class Square extends Shape {
//     constructor(type) {
//         super('square');
//     }

//     render() {
//         return `<rect x="75" y="25" width="150" height="150" fill="${data.shapeColor}" />`
//     }
// }





// function that will pass through inquirer data and write the SVG render code for browser
function generateSVG(data) {

    const circle = new Circle(`${data.shapeColor}`)

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${circle.render()}
  

  
  </svg>
  `

}


module.exports = generateSVG;

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
// create shapes constructor to take user inputs
// function Shapes(shape, shapeColor) {
//     this.shape = shape;
//     this.shapeColor = shapeColor;
//     this.showData = function () {
//         console.log(`your shape is ${shape}, and your shape color is: ${shapeColor}!`)
//     };
// }

function generateSVG(data) {

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  
  </svg>
  `
}


module.exports = generateSVG;
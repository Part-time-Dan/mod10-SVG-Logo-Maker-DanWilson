// create shapes constructor to take user inputs
function Shapes(shape, shapeColor) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.showData = function () {
        console.log(`your shape is ${shape}, and your shape color is: ${shapeColor}!`)
    };
}

// placeholder to verify print to console
const testSVG = new Shapes(
    'Circle',
    'Yellow'
);

testSVG.showData();

module.exports = Shapes;
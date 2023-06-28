[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

# Custom SVG Logo Maker for Node.js

## Description
This project is a SVG (scalable vector graphics) logo generator. It takes user inputs from a program running in the console and outputs a .svg file. It is limited to producing a 1-3 character text string with the user's preference of text color, and then adds a color background in either a circle, a square, or a triangle. This is an educational project with set criteria which includes offering a testing package to verify the shape generator code functionality.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Example](#example)
- [Video/Demos](#video)

## Installation
VScode (or equivalent), Node.js, npm Inquirer 8.2.4, npm Jest

## Usage
To run this program, open the code inside a development environment like VScode. Open the terminal window. In terminal, navigate to the directory path of the index.js file. Once in the same directory as the index.js, type ```node index.js``` into the terminal to initialize the program. Answer questions as prompted by typing in responses.

When prompted for colors, the user may provide standard color keywords, or enter '#' followed by the 6 character hexadecimal code for specific colors. (e.g. color keyword "red" or hexadecimal "#FF0000" both output the color red.)

When prompted for a shape, use the arrow keys to select between the choices. Upon completing the questionnaire, the console should log "Generated logo.svg".

From the current directory, navigate to "examples" folder to find the newly generated svg logo file. Open "logo.svg" in a browser of your choise

## Contributions
This is an educational project. No contributions are being accepted.

## Tests
A test file is provided to verify data is being modified in the "shape" class constructors correctly. The test passes static parameters to each "shape" extended class and verifies the class outputs the new parameters  by comparing it to a static string of SVG code containing matching paramters.

In terminal, navigate to the "lib" directory containing the "shapes.test.js" file and run command ```npx jest```. 

## Questions
If you have questions about this project:

Find me on GitHub -> [Part-time-Dan](https://github.com/Part-time-Dan)

OR

Reach me by email here -> [danielwilson.web@gmail.com](mailto:danielwilson.web@gmail.com)


## License
For additional license information, please follow the link: [MIT](https://choosealicense.com/licenses/mit/)

## Example

![Example Logo](./examples/samplelogo.SVG)

## Video

Soon

// required packages for functionality
const inquirer = require('inquirer');
const fs = require('fs');
// custom inquirer package will prevent user from entering more than 3 characters
const maxLength = require('inquirer-maxlength-input-prompt');

const { generateSVG } = require('./lib/shapes');

// array of questions prompting user for SVG specifications
const questions = [
    {
        type: 'maxlen-inp',
        name: 'text',
        message: 'Please enter logo text (3 character limit):',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'To choose your text color, enter a valid color keyword or hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: [
            "circle",
            "triangle",
            "square"
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'To choose your shape color, enter a valid color keyword or hexadecimal number:'
    }
]

function writeToFile(fileName, data) {
    return fs.writeFile((__dirname + '/examples/' + fileName), data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg"));
};

function init() {
    inquirer.registerPrompt('maxlen-inp', maxLength);
    inquirer
    .prompt(questions)
    .then((answer) => {
        console.log(generateSVG({...answer}));
        return writeToFile("logo.SVG", generateSVG({...answer}))
    })
};

init();

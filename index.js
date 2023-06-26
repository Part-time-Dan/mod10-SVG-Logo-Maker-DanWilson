const inquirer = require('inquirer');
const fs = require('fs');
const maxLength = require('inquirer-maxlength-input-prompt');

const generateSVG = require('./lib/shapes');

// array of questions to prompt user to collect SVG text, text color, shape and shape color inputs

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
    // {
    //     type: 'list',
    //     name: 'shape',
    //     message: 'What shape would you like your logo to be?',
    //     choices: [
    //         "circle",
    //         "triangel",
    //         "square"
    //     ]
    // },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'To choose your shape color, enter a valid color keyword or hexadecimal number:'
    }
]

function init() {
    inquirer.registerPrompt('maxlen-inp', maxLength);
    inquirer
    .prompt(questions)
    .then((answer) => {
        return console.log(generateSVG({...answer}))

    }
    )
}

init();
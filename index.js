const inquirer = require('inquirer');
const fs = require('fs');
const maxLength = require('inquirer-maxlength-input-prompt');

const shapes = require('./lib/shapes');

// array of questions to prompt user to collect SVG text, text color, shape and shape color inputs
inquirer.registerPrompt('maxlen-inp', maxLength);
const questions = [
    {
        type: 'maxlen-inp',
        name: 'text',
        message: 'Please enter logo text (3 character limit):',
        maxLength: 3
    },
    {
        type: 
    }
]
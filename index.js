// required packages for functionality
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const fs = require('fs');
// custom inquirer package will prevent user from entering more than 3 characters
const maxLength = require('inquirer-maxlength-input-prompt');

const generateSVG = require('./lib/generator');

//write file and add generated svg code in "examples" folder
function writeToFile(fileName, data) {
    return fs.writeFile((__dirname + '/examples/' + fileName), data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg"));
};

//initiatize program "node index.js"
function init() {
    inquirer.registerPrompt('maxlen-inp', maxLength);
    inquirer
    .prompt(questions)
    .then((answer) => {
        return writeToFile("logo.svg", generateSVG({...answer}))
    })
};

init();

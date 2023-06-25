const inquirer = require('inquirer');
const fs = require('fs');

const shapes = require('./lib/shapes');

// prompts to user to collect SVG text, text color, shape and shape color inputs
const questions = []
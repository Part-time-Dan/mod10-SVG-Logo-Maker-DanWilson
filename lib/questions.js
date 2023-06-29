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

module.exports = questions;
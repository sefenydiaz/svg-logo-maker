const questions = [
    // question for shape
    {
        name: 'shape',
        message: 'What is the desired shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // question for shape color
    {
        type: "input",
        name: "shapeColor",
        message: "What is the desired color of your shape? Please enter a hexadecimal:",
        validate: (answer) => {
            const hex = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hex)) {
                return console.log("Invalid. Please enter a hexadecimal color.")
            }
            return true;
        },

    },

    // question for shape text
    {
        name: 'text',
        message: 'What is the desired abbreviated name of your logo? Must be at most three characters.',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("Logo must only contain three characters or less.")
            }
            return true
        }
    },

    // question for text color
    {
        type: "input",
        name: "textColor",
        message: "What is the desired color of your logo text? Please enter a hexadecimal:",
        validate: (answer) => {
            const hex = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hex)) {
                return console.log("Invalid. Please enter a hexadecimal color.")
            }
            return true;
        }
    },
];

module.exports = questions;
// DEPENDENCIES
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const fs = require('fs');
const generate = require('./lib/generate.js');
const fileName = "./examples/logo.svg";


// need a function to create new shape
function generate(response) {
    const file = generate(response);
    fs.writeFile(fileName, file, () => console.log('generated logo.svg'));
}


// INITIALIZATION 
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            generate(response);
        })
        .catch(err => {
            console.log(err)
        });
}

init();
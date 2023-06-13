// DEPENDENCIES
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');


// need a function to create new shape



// INITIALIZATION 
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            logo(response);
        })
        .catch(err => {
            console.log(err)
        });
}

init();
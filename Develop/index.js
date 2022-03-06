// TODO: Include packages needed for this application
var inq = require("inquirer")
var genMark = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inq.prompt({
            type: 'input',
            name: 'title',
            message: 'What do you want to call this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an app name.');
                    return false;
                }
            }
        })
        .then((answers) => {
            var X = genMark(answers)
            console.log(X);
            console.log(answers);
        })
        .catch((banana) => {
            console.log(banana);
        });
    inq.prompt({
            type: 'input',
            name: 'title',
            message: 'Enter a description of this app.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an app name.');
                    return false;
                }
            }
        })
        .then((answers) => {
            var X = genMark(answers)
            console.log(X);
            console.log(answers);
        })
        .catch((banana) => {
            console.log(banana);
        });

    inq.prompt({
        type: 'input',
        name: 'title',
        message: 'Enter instrucitons on how to install the app.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an app name.');
                return false;
            }
        }
    });
    inq.prompt({
            type: 'input',
            name: 'title',
            message: 'Who contributed to developing this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an app name.');
                    return false;
                }
            }
        })
        .then((answers) => {
            var X = genMark(answers)
            console.log(X);
            console.log(answers);
        })
        .catch((banana) => {
            console.log(banana);
        });
}

// Function call to initialize app
init();
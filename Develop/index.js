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
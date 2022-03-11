// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")
const generateReadme = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const promptUser = () => {

    return inquirer.prompt([{
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
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of this app.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an app name.');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'instructions',
            message: 'Enter instructions on how to install the app.',
            default: 'npm install'

        }, {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to developing this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an app name.');
                    return false;
                }
            }
        }
    ])
    // .then(answers => {

    //     var X = generateReadme(answers)
    //     console.log(X);
    //     console.log(answers);
    // })
    // .catch(('generating the readme did not work') => {
    //     console.log('generating the readme did not work');
    // });
};


// TODO: Create a function to write README file
// TODO: Create a function to initialize app

// Function call to initialize app
// promptUser()
//     .then(answers => console.log(answers))
//     .then(answers => {
//         const readME = generateReadme(answers);
//         fs.writeFile('dist/readme.md', readME, err => {
//             if (err) throw new Error(err);
//             console.log('Page created! Look at your new Readme.md in this directory to see it.')
//         });
//     });

promptUser()
    // .then looks for user input - "answers" is just to represent that data below.  It is not a defined variable above

    .then(answers => {
        console.log(answers)
        const readME = generateReadme(answers)

        fs.writeFile('dist/readme.md', readME, err => {
            if (err) throw new Error(err);
            console.log('Page created! Look at your new Readme.md in this directory to see it.')
        });
    });
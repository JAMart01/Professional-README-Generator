const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project, go into as much detail as you would like! (Required)' ,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to include a Table of Contents in your README?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the steps required to install your project (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of how your project can be used (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any link to their Github profiles (Required)',
            validate: messageInput => {
                if (messageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'license',
            message: "Let other developers know what they can and can't do with your "
        }
    ])
    .then(data => {
        console.log(data);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        // This function will write the template to and README.MD file 
        fs.writeFile( fileName , data , function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Done!');
        });
    }


// TODO: Create a function to initialize app
// function init() {
//     questions()
//     .then(generateMarkdown(inquirerResponses))
// }
// This is where the promise to run inquirer will be called and then chained subsequently with all of the other functions in order to output the README file. 

// Function call to initialize app
// init();

questions();

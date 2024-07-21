// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your project title?",
                name: "title"
            },
            {
                type: "input",
                message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:",
                name: "description",
            },
            {
                type: "input",
                message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
                name: "installation",
            },
        ])
        .then((answers) => {
            console.log(answers)

        })
           
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', questions, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

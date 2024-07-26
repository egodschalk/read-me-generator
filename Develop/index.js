// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [

    
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
            {
                type: "input",
                message: "Provide instructions and examples for use. Include screenshots as needed.",
                name: "usage",
            },
            {
                type: "input",
                message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
                name: "credits",
            },
            {
                type: "list",
                message: "Choose a license for your project",
                name: "license",
                choices: ["Apache 2.0 License", "GNU GPLv2", "GNU GPLv3", "ISC License", "The MIT License"],
            },
            {
                type: "input",
                message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
                name: "contributing",
            },
            {
                type: "input",
                message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
                name: "tests",
            },
            {
                type: "input",
                message: "Enter your GitHub username so users can contact you with questions",
                name: "github",
            },
            {
                type: "input",
                message: "Enter your email so users can contact you with questions",
                name: "email",
            },
        ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();

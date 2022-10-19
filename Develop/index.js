// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    // Asks for the project name
    {
        type:'input',
        name:'title',
        message:'Describe name of project',
        validate:titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log ("Please input a project name!!")
                return false
            }

        }
    },
    // Asks for the user the describe the project
    {
        type:'input',
        name:'description',
        message:'Enter your project description',
        validate:descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log ("Please input a project description!!")
                return false
            }

        }
    },
    // Asks user to input installation instructions
    {
        type:'input',
        name:'installation',
        message:'Provide installation instructions',
        validate:installationInput => {
            if (installationInput) {
                return true
            } else {
                console.log ("Please input installation instructions!!")
                return false
            }

        }
    },
    // Asks user for usage info
    {
        type:'input',
        name:'usage',
        message:'What is the project usage?',
        validate:usageInput =>{
            if (usageInput) {
                return true
            } else {
                console.log ("Please input a project usage!!")
                return false
            }

        }
    },
    // Asks user for instructions on how to contribute to the project
    {
        type:'input',
        name:'contribution',
        message:'Describe your contribution guidlines for this project',
        validate:contributionInput =>{
            if (contributionInput) {
                return true
            } else {
                console.log ("Please input the project's contribution guidelines!!")
                return false
            }

        }
    },
    // Asks user to input test instructions
    {
        type:'input',
        name:'testing',
        message:'Describe how to testrun this project',
        validate:testInput =>{
            if (testInput) {
                return true
            } else {
                console.log ("Please input how to test the project!!")
                return false
            }

        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
        if(error)
        throw error
        console.log("COMPLETED, your super duper Professional README is created!")
    });
};
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function(userInput){
    console.log(userInput)
    writeToFile("README.md",generateMarkdown(userInput));
});
};

// Function call to initialize app
init();

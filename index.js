const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of names for user
const names = [
        {
            type: 'input',
            name: 'title',
            message:'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message:'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message:'What is the installation of your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message:'What is the usage information of your project?'
        },
        {
            type: 'list',
            name: 'license',
            message:'What license does your project is covered under?'
        },
        {
            type: 'input',
            name: 'contribution',
            message:'What is the contribution guildlines of your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message:'What is the test instruction of your project?'
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message:'What is the link of your GitHub profile?'
        }    
];

// function to write README file
function writeToFile() {
    util.promisify(fs.writeFile)
}


// function to initialize program
function init() {
    inquirer.prompt(names)
}

// function call to initialize program
init()
    .then((fileName, data) => ('README.md', writeToFile(fileName, data)))
    .then(() => console.log('successfully generate a README.md'))
    .catch((err) => console.error(err));

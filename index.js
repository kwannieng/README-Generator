const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choice } = require("inquirer/lib/objects/choice");

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
            message:'What is the installation of your project?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'usage',
            message:'What is the usage information of your project?'
        },
        {
            type: 'list',
            name: 'license',
            message:'What license is your project covered by?',
            choices: ['MIT', 'GPLv2', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'contribution',
            message:'What is the contribution guildlines of your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message:'What is the test instruction of your project?',
            default: 'npm test'
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
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}


// function to initialize program
function init() {
    inquirer.prompt(names).then ((response)=>{
        console.log(`Writing a README file`);
        writeToFile('README.md', generateMarkdown(...response));
    }
    
)}

// function call to initialize program
init();

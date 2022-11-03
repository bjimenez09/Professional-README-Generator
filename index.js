const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter repository name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your repository? (Required)',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for using your application. It is recommended to add descriptive images/vidoes/gifs.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   //Apache 2.0 License
            { value: 'BSD3' },  //BSD 3-Clause License
            { value: 'LGPL' },  //GNU LGPL v3
            { value: 'MIT' },  //The MIT License
            { value: 'MPL' }, //Mozilla Public License 2.0
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Explain how other developers may contribute to your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please explain how users may test your application.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please list instructions for those who wish to contact you.',
        name: 'questions',
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "email",
    }

])
    .then((data) => {
        const filename = data.title.replace(' ', "").toLowerCase()
        fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Thank you! The current data is being generated into your README.md"))
    })


function init() { }

// Function call to initialize app
init();
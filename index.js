// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer= require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project name',

        }, 
        {
            type: 'input',
            message: 'Enter a short description of your project.',
            name:'description',
        },
        {
            type: 'input',
            message:'How do you install your application?',
            name:'installation',
        },
        {
            type:'input',
            message:'How do you use this application?',
            name:'usage',
        },
        {
            type:'input',
            message:'Enter any contributors or sources used.',
            name:'credits',
        },
        {
            type:'input',
            message:'How do you test your application?',
            name:'test',
        },
        {
            type:'list',
            message:'Choose a license.',
            choices:['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT license',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0'],
            name:'license'        
        },
        {
            type:'input',
            message:'What is your Github username?',
            name:'github'
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'email',
        },

    ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

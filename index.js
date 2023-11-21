
// fs helps write the file
// inquirer helps with the prompts
const fs=require('fs');
const inquirer= require('inquirer');
const generate=require('./generateMarkdown.js')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license==='No License'){
        console.log(license)
      console.log('No license chosen.')
      return ""
    } else {
        switch(license.toString()) {
          case 'MIT':
            return `![GitHub](https://img.shields.io/badge/License-MIT-informational)`;
          case 'The Unlicense':
            return `![GitHub](https://img.shields.io/badge/License-The%20Unlicense-red)`;
          case 'GNU GPLv3':
            return `![GitHub](https://img.shields.io/badge/License-GNU%20GPLv3-yellow)`;
          case 'Apache License 2.0':
            return `![GitHub](https://img.shields.io/badge/License-Apache%20License%202.0-blueviolet)`;
          case 'Mozilla Public License 2.0':
            return `![GitHub](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-brightgreen)`;
        };

      };
    
    // will return an empty string if nothing is entered, if something is entered it will show the license badge 
  }
  // renderLicenseBadge(license)
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if('No License'){
      return ""
    }
    return `https://opensource.org/licenses/${license}`
  }
  // renderLicenseLink(license)
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if('No License'){
      return ""
    }
    return `
## License
This application is licensed under the terms of the ![${license}](${renderLicenseBadge(license)}) license.
[License Terms](${renderLicenseLink(license)})
`
  }
// this is a skeleton for the readme file to fill in 
const readme=(name, description, installation, usage, credits, test, license, github, email)=> 
`# ${name}

## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}
${renderLicenseSection(license)}



## Tests
${test}

## Questions
If you have any further questions, you can reach me by email or Github!
https://github.com/${github}/${name}
${github},
${email}
`



// array of questions to help the user build out their readme
const questions = [
 
        {
            type: 'input',
            message: 'What is the name of your project? Please use the same name used in your github repository.',
            name: 'name',

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
            choices:['Apache-License-2.0',
            'GNU-General-Public-License-v3.0',
            'MIT-license',
            'BSD-2-Clause-Simplified License',
            'BSD-3-Clause-New-or-Revised-License',
            'Boost-Software-License-1.0',
            'Creative-Commons-Zero-v1.0-Universal',
            'Eclipse-Public-License-2.0', 'No License'],
            name:'license'        
        },
        {
            type:'input',
            message:'What is your GitHub username?.',
            name:'github'
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'email',
        },

   

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const {name, description, installation, usage, credits, test, license, github, email}=data
    fs.writeFile(fileName, readme(name, description, installation, usage, credits, test, license, github, email), (err) => 
    err ? console.log(err) : console.log("We did it!"))
}
// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt (questions)
    .then((data) =>{
        console.log(data)
        writeToFile('newREADME.md', data)
    })
}

// Function call to initialize app
init()
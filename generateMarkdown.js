// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license===null){
    console.log('No license chosen.')
    return ""
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  // will return an empty string if nothing is entered, if something is entered it will show the license badge 
}
// renderLicenseBadge(license)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license===null){
    return ""
  }
  return `https://opensource.org/licenses/${license}`
}
// renderLicenseLink(license)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license===null){
    return ""
  }
  return '${license}'
}
// renderLicenseSection(license)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {name, description, installation, usage, credits, test, license, github, email}=data
  return `# <${name}>

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
  
  
  ## Tests
  ${test}
  
  ## Contact Me
  ${github},
  ${email}
  `;
}

module.exports = generateMarkdown;

// function to generate a license badge

function generateLicenseBadge (license) {
  if (license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } 
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `${generateLicenseBadge(data.license)}
  # ${data.title}
  ${data.title}
  
## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Developer's GitHub Profile](#developer's-GitHub-Profile)
  - [Questions](#questions)
      
  ## Description
  ${data.description}    
      
  ## Installation
  ${data.installation}
      
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${data.license}
  
  ## Developer's GitHub Profile
  ${data.github}
      
  ## Questions
  If you have any questions regarding this project, please send an email to ${data.email}`
  ;
}

module.exports = generateMarkdown;

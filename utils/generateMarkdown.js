// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.title}
  
  Table of Contents 
  ------------- 
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [Tests](#Tests)
  [License](#License)
  [Developer's GitHub Profile](#Developer's GitHub Profile)
  [Questions](#Questions)
      
  ## Description
  ${data.description}    
      
  ## Installation
  ${data.installation}
      
  ## Usage
  ${data.usage}
  
  ##Contributing
  ${data.contribution}
  
  ##Tests
  ${data.tests}
  
  ##License
  ${data.license}
  
  ##Developer's GitHub Profile
  ${data.github}
      
  ##Questions
  If you have any questions regarding this project, please send an email to ${data.email}`
  ;
}

module.exports = generateMarkdown;

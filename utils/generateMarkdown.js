// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;

}

function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#Test)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

_Follow these steps to properly install this application_

  ${data.installation}

## Usage

_Instructions for use_

  ${data.usage}
${renderLicenseSection(data.license)}

## Contribution

_If you would like to contribute, please adhere to these guidelines_

  ${data.contributing}

## Test
_Instructions for testing application_

  ${data.test}

## Questions
  _For Further Questions_
  
  ${data.questions}

  _Contact Info_

  -  Email: ${data.email} 
  
  - GitHub: [${data.username}](https://github.com/${data.username})   
  
  ---
`;
}

module.exports = generateMarkdown;
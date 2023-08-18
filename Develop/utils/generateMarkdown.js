// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'Boost Software 1.0') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === 'BSD 3-Clause') {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'Creative Commons') {
    return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
  } else if (license === 'Eclipse') {
    return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
  } else if (license === 'GNU GPL v3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'IBM') {
    return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
  } else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Mozilla Public 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Creative Commons') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'Eclipse') {
    return 'https://opensource.org/licenses/EPL-1.0';
  } else if (license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0';
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla Public 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (licenseBadge && licenseLink) {
    return `
${licenseBadge}

Licensed under the ${license} license
${licenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let renderedLicense = renderLicenseSection(data.license);
  return `# ${data.title}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents 
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  \n
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderedLicense}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.gitHubUsername}\n
  ${data.emailAddress}
`;
}

module.exports = generateMarkdown;

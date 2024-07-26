// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license === 'Apache 2.0 License') {
//     const badge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
//   } else if (data.license === 'GNU GPLv2') {
//     const badge = `https://img.shields.io/badge/License-GPL_v2-blue.svg)`
//   } else if (data.license === 'GNU GPLv3') {
//     const badge = `https://img.shields.io/badge/License-GPLv3-blue.svg`
//   } else if (data.license === 'ISC License') {
//     const badge = `https://img.shields.io/badge/License-ISC-blue.svg`
//   } else if (data.license === 'The MIT License') {
//     const badge = `https://img.shields.io/badge/License-MIT-yellow.svg`
//   } else {
//     const badge = ''
//   }
// }
// renderLicenseBadge();
// console.log(license.badge);
// console.log(badge)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Questions

[GitHub Profile](https://github.com/${data.github})

[egodschalk@gmail.com](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

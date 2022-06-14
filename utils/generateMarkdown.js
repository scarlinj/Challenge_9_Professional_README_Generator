const fs = require('fs');
const answers = require('../index.js')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = require('./licensebadges.js')

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  `./licensebadges.js`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `./licensebadges.js`
}

// TODO: Create a function to generate Readme for README

const generateReadme = (answers) => {


  return (`   # ${answers.title}
  ## Description

${answers.description}

# Table of Contents (Optional)



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation <a name="installation"></a>

${answers.installation}

<a name="usage"></a>
## Usage

Provide instructions and examples for use.
${answers.usage}
<a name="credits"></a>
## Credits

List your collaborators, if any, with links to their GitHub profiles.
${answers.contribution}

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${answers.tutorials}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

[Badges](#badges)
## Badges

![plastic style](https://img.shields.io/endpoint?url=<URL>&style?style=plastic&logo=appveyor)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

[Features](#features)
## Features

If your project has a lot of features, list them here.
${answers.features}

[Contribute](#contribute)
## How to Contribute
${answers.contribute}

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

[Tests](#tests)
## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
${answers.tests}

[Questions](#questions)
If you have additional questions, please contact the developer at ${answers.github}.
`

  )
}

module.exports = generateReadme;
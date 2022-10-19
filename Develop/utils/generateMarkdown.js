function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

function renderLicenseLink(license) {
  let licenseLink;
}

function renderLicenseSection(license) {
  function renderLicenseSection(license) {
    let licenseSect = "";
    switch(license) {
    case "MIT":
    licenseLink = "https://mit-license.org/";
    break;
    default:
    licenseLink = "";
    break;
  }
}
return licenseLink;
}

  // function generates markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

 ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
  }

  module.exports = generateMarkdown;

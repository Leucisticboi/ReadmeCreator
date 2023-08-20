# README Generator

## Table of Contents
[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Video Walkthrough](#video-walkthrough)

[Credits](#credits)

[License](#license)

## User Story
AS A developer

I WANT a README generator

SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

GIVEN a commend-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README

## Description
This application allows the user to create a custom professional README.md file for whatever project  they are preparing to deploy.

## Installation
Clone this repository to a local directory in order to use the application.

## Usage
Use of this application is quite straightforward. 

Open the Develop directory in the CLI and run the 'node index.js' command. The console will now print one question at a time, starting with a prompt for the title of the project for which you are creating a README.md file. After answering each question hit 'enter' to save your responses.

After the last prompt is answered the application will stop running and a new README.md file will be written to the Develop directory. You can now open a preview of the file and/or export it to your project repository.

## Video Walkthrough
https://drive.google.com/file/d/1q8gRkp4LwWO2iNRfuTWKS0PgDD2h-YiS/view

## Credits
I referenced a couple of the U of U Bootcamp's NodeJS activites to ensure all of my code was written properly- '19-Ins_Inquirer-Demo' and '13-Ins-Read-Write-File'.

For my project license information I referenced https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

I will note that I could have used the Rest API to retrieve license information; however, I thought that it would be simpler to create my own succinct list of licenses to choose from.

## License
The MIT License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

https://opensource.org/license/mit/


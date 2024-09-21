// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm install',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license is the project under?',
        default: 'MIT',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
];
// TODO: Create a function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('README.md has been successfully generated!');
    });
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
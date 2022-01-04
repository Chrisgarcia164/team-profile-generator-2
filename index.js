const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the manager's name",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the manager's email",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office number",
      name: "office",
    },
    {
      type: "input",
      message: "What is the manager's id?",
      name: "id",
    },
  ])
  .then((answers) => {
    let name = answers.firstName;
    let email = answers.email;
    let office = answers.office;
    let id = answers.id;
    const manager = new Manager(name, id, email, office);
    team.push(manager);
    addNewMember();
  });

const addNewMember = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add a new team member?",
        name: "add",
      },
    ])
    .then((answers) => {
      console.log(answers.add);
      switch (answers.add) {
        case true:
          console.log("new team ");
          createNewMember();
          break;
        case false:
          console.log("no");
      }
    });
};
const createNewMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose the employee's role",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Engineer":
          console.log("engineer chosen");
          engineerPrompt();
          break;
        case "Intern":
          console.log("Intern chosen");
          internPrompt();
          break;
      }
    });
};
const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the intern's name",
        name: "firstName",
      },
      {
        type: "input",
        message: "what is the intern's email",
        name: "email",
      },
      {
        type: "input",
        message: "what is the intern's id",
        name: "id",
      },
      {
        type: "input",
        message: "what school does the intern attend",
        name: "school",
      },
    ])
    .then((answers) => {
      let name = answers.firstName;
      let email = answers.email;
      let school = answers.school;
      let id = answers.id;
      const intern = new Intern(name, id, email, school);
      console.log(intern);
      team.push(intern);
      addNewMember();
    });
};
const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the engineer's engineer's name",
        name: "firstName",
      },
      {
        type: "input",
        message: "what is the engineer's id",
        name: "id",
      },
      {
        type: "input",
        message: "what is the engineer's id",
        name: "email",
      },
      {
        type: "input",
        message: "what is the engineer's github",
        name: "github",
      },
    ])
    .then((answers) => {
      let name = answers.firstName;
      let email = answers.email;
      let github = answers.github;
      let id = answers.id;
      const engineer = new Engineer(name, id, email, github);
      console.log(engineer);
      team.push(engineer);
      addNewMember();
    });
};

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
      message: "What is your name",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is your email",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office number",
      name: "office",
    },
    {
      type: "input",
      message: "What is your ID?",
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
          break;
        case false:
          console.log("no ");
      }
    });
};

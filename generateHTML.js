const generateManager = function (manager) {
  console.log("generating manager");
  return `
  <div class="card">
          <h2>${manager.name}</h2>
          <div>
            <ul>
              <li>Manager</li>
              <li>${manager.id}</li>
              <li>${manager.email}</li>
              <li>${manager.office}</li>
            </ul>
          </div>
        </div>
  
  
  `;
};
const generateIntern = function (intern) {
  console.log("generating intern");
  return `
  <div class="card">
  <h2>${intern.name}</h2>
  <div>
    <ul>
      <li>Intern</li>
      <li>${intern.id}</li>
      <li>${intern.email}</li>
      <li>${intern.school}</li>
    </ul>
  </div>
</div>
  
  
  
  `;
};
const generateEngineer = function (engineer) {
  console.log("generating engineer");
  return `
  <div class="card">
  <h2>${engineer.name}</h2>
  <div>
    <ul>
      <li>Engineer</li>
      <li>${engineer.id}</li>
      <li>${engineer.email}</li>
      <li>${engineer.school}</li>
    </ul>
  </div>
</div>
  
  
  `;
};
const generateHTML = function (data) {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Engineer") {
      let engineer = generateEngineer(employee);
      cards.push(engineer);
    } else if (role === "Intern") {
      let intern = generateIntern(employee);
      cards.push(intern);
    } else if (role === "Manager") {
      let manager = generateManager(employee);
      cards.push(manager);
    }
  }
  console.log(cards);
  const page = generatePage(cards);
  return page;
};
const generatePage = function (team) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1>Meet the team</h1>
    </header>
    <main>
      <div id="cards">
      ${team}
      </div>
    </main>
  </body>
</html>
  `;
};
module.exports = generateHTML;

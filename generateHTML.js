const generateManager = function (manager) {
  console.log("generating manager");
  return `
  <div class="card">
          <h2 class="name">${manager.name}</h2>
          <div>
            <ul>
              <li>Manager</li>
              <li>id: ${manager.id}</li>
              <li>Email:${manager.email}</li>
              <li>Office Number${manager.office}</li>
            </ul>
          </div>
        </div>
  
  
  `;
};
const generateIntern = function (intern) {
  console.log("generating intern");
  return `
  <div class="card">
  <h2 class="name">${intern.name}</h2>
  <div>
    <ul>
      <li>Intern</li>
      <li>id: ${intern.id}</li>
      <li>Email: ${intern.email}</li>
      <li>School: ${intern.school}</li>
    </ul>
  </div>
</div>
  
  
  
  `;
};
const generateEngineer = function (engineer) {
  console.log("generating engineer");
  return `
  <div class="card">
  <h2 class="name">${engineer.name}</h2>
  <div>
    <ul>
      <li>Engineer</li>
      <li>id: ${engineer.id}</li>
      <li>email: ${engineer.email}</li>
      <li>github: ${engineer.github}</li>
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
    <link rel="stylesheet" href="style.css" />
    <title>Team profile generator</title>
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

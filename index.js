const mysql = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
require("dotenv").config();
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "merc",
  database: "employee_Tracker_db",
});

// connection.connect();
console.log(
  chalk.yellow.bold(
    "======================================================================================================="
  )
);
console.log(``);
console.log(chalk.grey.bold(figlet.textSync("EMPLOYEE TRACKER")));
console.log(``);
console.log(
  chalk.yellow.bold(
    `======================================================================================================`
  )
);

const printMenuPrompts = () => {
  inquirer
    .prompt({
      name: "choices",
      type: "list",
      message: "PLEASE SELECT A MENU OPTION...",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "View Employees By Manager",
        "Update Employee Role",
        "Add New Employee",
        "Add New Role",
        "Add New Department",
        "Exit Menu",
      ],
    })
    .then((answers) => {
      const { choices } = answers;

      if (choices === "View All Employees") {
        viewAllEmployees();
      }
      if (choices === "View All Roles") {
        viewAllRoles();
      }
      if (choices === "View All Departments") {
        viewAllDepartments();
      }
      if (choices === "View Employees By Manager") {
        viewEmployeesByManager();
      }
      if (choices === "Update Employee Role") {
        updateEmployeeRole();
      }

      if (choices === "Add New Employee") {
        addNewEmployee();
      }
      if (choices === "Add New Role") {
        addNewRole();
      }
      if (choices === "Add New Department") {
        addNewDepartment();
      }
      if (choices === "Update Employee Managers") {
        updateEmployeeManagers();
      }
      if (choices === "Delete Employee") {
        deleteEmployee();
      }
      if (choices === "Delete Role") {
        deleteRole();
      }
      if (choices === "Delete Department") {
        deleteDepartment();
      }
      if (choices === "Exit Menu") {
        console.log("Logged out! Type npm start to login");
        connection.end();
      }
    });
};

//SQL SELECT * FROM statements for choices
const viewAllEmployees = () => {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  printMenuPrompts();
};

const viewAllRoles = () => {
  const query = "SELECT * FROM roles";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  printMenuPrompts();
};

const viewAllDepartments = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  printMenuPrompts();
};

// BONUS: SQL ORDER BY statement to view employees by manager
const viewEmployeesByManager = () => {
  const query = "SELECT * FROM employee ORDER BY manager_id DESC";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  printMenuPrompts();
};

const updateEmployeeRole = () => {
  connection.query("SELECT * FROM employee", (err, employees) => {
    if (err) console.log(err);
    employees = employees.map((employee) => {
      return {
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      };
    });
    connection.query("SELECT * FROM roles", (err, roles) => {
      if (err) console.log(err);
      roles = roles.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
      inquirer
        .prompt([
          {
            type: "list",
            name: "selectEmployee",
            message: "Select employee to update...",
            choices: employees,
          },
          {
            type: "list",
            name: "selectNewRole",
            message: "Select new employee role...",
            choices: roles,
          },
        ])
        .then((data) => {
          connection.query(
            "UPDATE employee SET ? WHERE ?",
            [
              {
                role_id: data.selectNewRole,
              },
              {
                id: data.selectEmployee,
              },
            ],
            function (err) {
              if (err) throw err;
            }
          );
          console.log("Employee role updated");
          viewAllRoles();
        });
    });
  });
};

const addNewEmployee = () => {
  connection.query("SELECT * FROM roles", (err, roles) => {
    if (err) console.log(err);
    roles = roles.map((role) => {
      return {
        name: role.title,
        value: role.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "Enter first name of new employee...",
        },
        {
          type: "input",
          name: "lastName",
          message: "Enter last name of new employee...",
        },
        {
          type: "list",
          name: "role",
          message: "Enter new employee role...",
          choices: roles,
        },
        {
          type: "list",
          name: "managerId",
          message: "select a manager id...",
          choices: [1, 3, 5, 6, 7],
        },
      ])
      .then((data) => {
        console.log(data.role);
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: data.firstName,
            last_name: data.lastName,
            role_id: data.role,
            manager_id: data.managerId,
          },
          (err) => {
            if (err) throw err;
            console.log("Updated Employee Roster;");
            viewAllEmployees();
          }
        );
      });
  });
};

const addNewRole = () => {
  connection.query("SELECT * FROM department", (err, departments) => {
    if (err) console.log(err);
    departments = departments.map((department) => {
      return {
        name: department.name,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "newRole",
          message: "Enter title of new role...",
        },
        {
          type: "input",
          name: "salary",
          message: "Enter salary of new role...",
        },
        {
          type: "list",
          name: "departmentId",
          message: "Enter department of new role...",
          choices: departments,
        },
      ])
      .then((data) => {
        connection.query(
          "INSERT INTO roles SET ?",
          {
            title: data.newRole,
            salary: data.salary,
            department_id: data.departmentId,
          },
          (err) => {
            if (err) throw err;
            console.log("Added new Role;");
            viewAllRoles();
          }
        );
      });
  });
};

const addNewDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "Enter new department name...",
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: data.newDepartment,
        },
        function (err) {
          if (err) throw err;
        }
      );
      console.log("New department added to database");
      viewAllDepartments();
    });
};

connection.connect((err) => {
  if (err) throw err;

  printMenuPrompts();
});

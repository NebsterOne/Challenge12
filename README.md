# 12 SQL: Employee Tracker

## Table of Contents

- [Your task](#Your-Task)
- [User Story ](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Video Presentation](#video-presentation)
- [Database schema image](#database-schema-image)
- [Installation Instructions](#Installation)
- [Contact](#contact)
- [License](#license)

## Your Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This assignment builds a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

A walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met is added. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Video Presentation

```md
[Video 1 - VS Code](https://drive.google.com/file/d/1Ig3Fh_mo68vp6ie_XQFhmwqwzNma6CxH/view?usp=sharing)
[Video 2 - Walkthrought Video](https://drive.google.com/file/d/1JXqg5msfB5NTTKrk0DKO62EeRTa-eD-e/view?usp=sharing)
```

## Database schema image

Database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

## Installation Instructions

```md
npm i -- to install node,
then npm i inquirer to install inquierer and the version
then npm install console.table --save
then mysql -u root -p
then enter password
then source db/schema.sql
then source db/seed.sql
then npm start (to start the program) and follow the instructions answers
```

## Contact

```md
GitHub: https://github.com/NebsterOne
```

## License

MIT License
Copyright (c) 2023 Ned Zatezalo

INSERT INTO department(name)
    VALUES  ("Architecture"),
            ("Developers"),
            ("Busines analysis"),
            ("Database");
            ("Security");

INSERT INTO roles(title, salary, department_id)
    VALUES  ("Cloud Infrastructure architect", 80000, 1),
            ("Solutions architect", 60000, 1),
            ("Cloud/software developer", 120000, 2),
            ("Full-stack developer", 75000, 2),
            ("Data analyst", 140000, 3),
            ("Business system analyst", 200000, 3),
            ("SQL database administrator", 180000, 4);
            ("Data quality manager", 140000, 4),
            ("Security systems administrator", 140000, 5),
            ("Cloud security specialist", 140000, 5),

INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES  ("David" "Robinson", 1, NULL),
            ("Patrick", "Ewing", 2, 1),
            ("Larry", "Bird", 3, 1),
            ("Scottie", "Pippen", 5, 5),
            ("Michael", "Jordan", 5, NULL),
            ("Clyde", "Drexler", 4, 5),
            ("Karl", "Malone", 6, 5),
            ("John", "Stockton", 7, NULL),
            ("Chris", "Mullin", 8, NULL),
            ("Charles", "Barkley", 9, 8),
            ("Magic", "Johnson", 10, 8);
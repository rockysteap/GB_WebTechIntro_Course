
-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE (name, dept) VALUES ('Clark', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Ava', 'Sales');

-- fetch 
SELECT empId, name 
FROM EMPLOYEE 
WHERE dept = 'Sales' AND empId > 2 AND name LIKE '%av%' OR name = 'Dave'
ORDER BY name DESC;


-- в реальных БД вместо автоикремента в первичных ключах используют
-- Version 4 UUID Generator (для примера -> https://www.uuidgenerator.net/)
-- выглядит, например, так: 229f3328-b88f-47fd-80f6-f0693f5d0cf4

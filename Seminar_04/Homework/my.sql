-- Создать файл my.sql, в котором должна создаваться таблица с информацией об одногруппниках.
-- В таблице должно быть четыре поля: id, name, age, address. Все поля в таблице обязательны для заполнения.
-- Необходимо добавить 5-10 одногруппников в данную таблицу.
-- Необходимо написать запрос на получение имен всех одногруппников (только имен, без всего остального), 
-- которые живут в Москве и их возраст находится в диапазоне [18, 30) лет. 
-- Примечание:
-- Квадратные скобки при указании диапазона, означают "включительно", а круглые "не включительно", 
-- то есть диапазон (7, 9] означает "от 7, где 7 не попадает в данный диапазон, до 9 включительно". 
-- Такой синтаксис нельзя использовать в sql, вам нужно найти решение, как такое условие можно записать в sql по-другому.
-- Для проверок работы своего скрипта можете использовать свою базу данных, либо используйте сайт: https://onecompiler.com/mysql

-- create
CREATE TABLE Students (
  stdId INT AUTO_INCREMENT,
  stdName TEXT NOT NULL,
  stdAge INT NOT NULL,
  stdAddress TEXT NOT NULL,
  PRIMARY KEY(stdId)
);

-- insert
INSERT INTO Students 
  (stdName, stdAge, stdAddress) 
VALUES
  ('Anna', 22,'St.Petersburg'),
  ('Bell', 21,'Salehard'),
  ('Daria', 23,'Sevastopol'),
  ('Elena', 20,'Saratov'),
  ('Hanna', 17,'Saransk'),
  ('July', 18,'Suzdal'),
  ('Kate', 19,'Surgut'),
  ('Lola', 30,'Sochi'),
  ('Maria', 29,'Smolensk');

-- fetch
-- SELECT stdName FROM Students WHERE stdAge >= 18 AND stdAge < 30 AND stdAddress = 'Saratov'  -- -> Elena
SELECT stdName FROM Students WHERE stdAge >= 18 AND stdAge < 30 AND stdAddress = 'Moscow'  -- -> пустой вывод 

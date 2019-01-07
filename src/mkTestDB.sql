CREATE database TestDB;
USE TestDB;
CREATE table products (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50), cost int, PRIMARY KEY (id));
INSERT INTO products (name, cost) Values ('Lobster', 100), ('Switch', 1000), ('Hat', 2);
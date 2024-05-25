--creamos las ordenes para crear la tabla e insertar datos. Copiar y pegar en terminal psql
CREATE DATABASE alumnos;
CREATE TABLE estudiantes(id SERIAL PRIMARY KEY, name VARCHAR(350), email VARCHAR(350)); 


INSERT INTO estudiantes (name , email) VALUES ("José", "jose@algo.com");
INSERT INTO estudiantes (name , email) VALUES ("mary", "mary@algo.com");
-- requêtes création des tables
-- DROP DATABASE IF EXISTS plantdex;

-- CREATE DATABASE plantdex WITH ENCODING 'UTF8' LC_COLLATE="utf8_general_ci";
-- CREATE DATABASE plantdex;
-- USE plantdex;
DROP TYPE IF EXISTS SOLEIL CASCADE;
DROP TABLE IF EXISTS utilisateur CASCADE; 
DROP TABLE IF EXISTS categorie CASCADE; 
DROP TABLE IF EXISTS plant CASCADE; 

CREATE TYPE SOLEIL AS ENUM('peu','moyen','beaucoup');

CREATE TABLE utilisateur (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE categorie (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL
);

CREATE TABLE plant (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL ,
  soleil SOLEIL NOT NULL,
  arrosage INT NOT NULL,
  plant_image VARCHAR(200) NOT NULL,
  id_categorie INT NOT NULL,
  constraint chk_arrosage CHECK (arrosage >=0 AND arrosage <=4),
  constraint fk_plant_categorie FOREIGN KEY(id_categorie) REFERENCES categorie(id) ON DELETE CASCADE
);

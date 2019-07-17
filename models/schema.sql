DROP DATABASE IF EXISTS pets_db;

CREATE DATABASE pets_db;

USE pets_db;

CREATE TABLE shelters (
shelter_id INTEGER NOT NULL AUTO_INCREMENT,
shelter_name VARCHAR(45) NULL,
shelter_city VARCHAR(45) NULL,
shelter_state VARCHAR(45) NULL,
shelter_rating INTEGER NOT NULL,
shelter_kill BOOLEAN DEFAULT FALSE,
createdAt VARCHAR(45) NULL,
updatedAt VARCHAR(45) NULL,
PRIMARY KEY (shelter_id)
);

CREATE TABLE pets (
pet_id INTEGER NOT NULL AUTO_INCREMENT,
pet_name VARCHAR(45) NULL,
pet_image VARCHAR(45) NULL,
pet_species VARCHAR(45) NULL,
pet_age INTEGER NOT NULL,
pet_gender VARCHAR(45) NULL,
pet_breed VARCHAR(45) NULL,
shelter_id INTEGER NOT NULL,
pet_adopted BOOLEAN DEFAULT FALSE,
PRIMARY KEY (pet_id)
);

CREATE TABLE users (
user_id INTEGER NOT NULL AUTO_INCREMENT,
user_email VARCHAR(45) NULL,
user_password VARCHAR(45) NULL,
user_name VARCHAR(45) NULL,
user_phone VARCHAR(45) NULL,
user_image VARCHAR(45) NULL,
pet_id INTEGER NOT NULL,
PRIMARY KEY (user_id)
);

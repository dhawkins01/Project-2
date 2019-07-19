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
createdAt VARCHAR(45) NULL,
updatedAt VARCHAR(45) NULL,
ShelterShelterId VARCHAR(45) NULL,
PRIMARY KEY (pet_id)
);

CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(20),
	fullname varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);

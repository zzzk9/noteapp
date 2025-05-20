-- create the databases
CREATE DATABASE IF NOT EXISTS collection;

-- Switch to the database
USE collection;

-- Drop the table if it exists and recreate it
CREATE TABLE IF NOT EXISTS `notes` (
	`id` INT(5) NOT NULL AUTO_INCREMENT,
	`title` TEXT NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci';
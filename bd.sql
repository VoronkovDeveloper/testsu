CREATE DATABASE survey_db;
USE survey_db;

CREATE TABLE survey (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT,
    aktiv VARCHAR(255),
    group VARCHAR(255),
    role VARCHAR(50),
    recommed VARCHAR(50),
    languages VARCHAR(255),
    comment TEXT
);
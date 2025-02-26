CREATE DATABASE IF NOT EXISTS parking;

USE parking;

CREATE TABLE IF NOT EXISTS vehicules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type_vehicule ENUM('CAR', 'BIKE', 'MOTORCYCLE', 'BUS', 'OTHER') NOT NULL,
  color VARCHAR(50) NOT NULL,
  patente VARCHAR(50) NOT NULL,
  brand VARCHAR(50) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

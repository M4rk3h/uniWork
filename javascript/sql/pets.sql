CREATE TABLE pets (
    petNo int NOT NULL AUTO_INCREMENT,
    petName varchar(255) NOT NULL,
    petType varchar(255),
    PRIMARY KEY (petNo)
); 

INSERT INTO pets (petName, petType)
VALUES ('Ollie', 'Border Collie'),
('Max', 'Staff / Shitzu');
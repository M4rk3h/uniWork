CREATE TABLE pets (
    petNo int NOT NULL AUTO_INCREMENT,
    petName varchar(50) NOT NULL,
    petType varchar(50),
    petBreed varchar(50),
    petOwner varChar(50),
    PRIMARY KEY (petNo)
);

INSERT INTO 
pets (petName, petType, petBreed, petOwner)
VALUES 
('Ollie', 'Dog', 'Border Collie', 'Greg Thomas'),
('Max', 'Dog', 'Staff Shitzu', 'Lauren Thomas'),
('Lily', 'Cat', 'Maine Coon', 'Mark Baber'),
('Daisy', 'Cat', 'Munchkin', 'Mark Baber'),
('Sparks', 'Cat', 'Scottish Fold', 'Elliot Ash'),
('Pooch', 'Dog', 'Jack Russell Terrier', 'Yvonne Evans'),
('Roger', 'Rabbit', 'British Giant', 'Vivian Smith');

CREATE TABLE guitars (
    guitarNo int NOT NULL AUTO_INCREMENT,
    guitarBrand varchar(50) NOT NULL,
    guitarModel varchar(50),
	guitarType varchar(50),
    PRIMARY KEY (guitarNo)
);

INSERT INTO 
guitars (guitarBrand, guitarModel, guitarType)
VALUES 
('Fender', 'Starcaster', 'Electric Guitar'),
('Squier', 'Jazz', 'Electric Bass'),
('Gibson', 'Marauder', 'Electric Bass'),
('Chapman Guitars', 'ML3 Pro', 'Electrical Guitar'),
('Epiphone', 'ES-339', 'Electric Guitar'),
('Gretsch', 'White Falcon', 'Electric Guitar');
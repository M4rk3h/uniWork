-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 08, 2020 at 05:42 PM
-- Server version: 8.0.15
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_17076749`
--

-- --------------------------------------------------------

--
-- Table structure for table `guitars`
--

CREATE TABLE `guitars` (
  `guitarNo` int(11) NOT NULL,
  `guitarBrand` varchar(50) NOT NULL,
  `guitarModel` varchar(50) DEFAULT NULL,
  `guitarType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `guitars`
--

INSERT INTO `guitars` (`guitarNo`, `guitarBrand`, `guitarModel`, `guitarType`) VALUES
(1, 'Fender', 'Starcaster', 'Electric Guitar'),
(2, 'Squier', 'Jazz', 'Electric Bass'),
(3, 'Gibson', 'Marauder', 'Electric Bass'),
(4, 'Chapman Guitars', 'ML3 Pro', 'Electric Guitar'),
(5, 'Epiphone', 'ES-339', 'Electric Guitar'),
(6, 'Gretsch', 'White Falcon', 'Electric Guitar'),
(7, 'Yamaha', 'ERG 121', 'Electric Guitar'),
(8, 'Yamaha', 'ERG 121', 'Electric Guitar');

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `petNo` int(11) NOT NULL,
  `petName` varchar(50) NOT NULL,
  `petType` varchar(50) DEFAULT NULL,
  `petBreed` varchar(50) DEFAULT NULL,
  `petOwner` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`petNo`, `petName`, `petType`, `petBreed`, `petOwner`) VALUES
(1, 'Ollie', 'Dog', 'Border Collie', 'Greg Thomas'),
(2, 'Max', 'Dog', 'Staff Shitzu', 'Lauren Thomas'),
(3, 'Lily', 'Cat', 'Maine Coon', 'Mark Baber'),
(4, 'Daisy', 'Cat', 'Munchkin', 'Mark Baber'),
(5, 'Sparks', 'Cat', 'Scottish Fold', 'Elliot Ash'),
(6, 'Pooch', 'Dog', 'Jack Russell Terrier', 'Yvonne Evans'),
(7, 'Roger', 'Rabbit', 'British Giant', 'Vivian Smith');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guitars`
--
ALTER TABLE `guitars`
  ADD PRIMARY KEY (`guitarNo`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`petNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guitars`
--
ALTER TABLE `guitars`
  MODIFY `guitarNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `petNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2019 at 10:14 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `AlbumNo` int(11) NOT NULL,
  `AlbumName` varchar(255) NOT NULL,
  `ArtistName` varchar(255) NOT NULL,
  `AlbumYear` year(4) NOT NULL,
  `AlbumArt` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`AlbumNo`, `AlbumName`, `ArtistName`, `AlbumYear`, `AlbumArt`) VALUES
(3735, 'Mothers Milk', 'Red Hot Chili Peppers', 1989, NULL),
(3736, 'Stadium Arcadium', 'Red Hot Chili Peppers ', 2004, NULL),
(3737, 'Physical Graffiti', 'Led Zeppelin', 1975, NULL),
(3738, 'Led Zeppelin IV', 'Led Zeppelin', 1971, NULL),
(3739, 'Abbey Road', 'The Beatles', 1969, 'abbeyRoad.jpg'),
(3740, 'Help!', 'The Beatles', 1965, NULL),
(3741, 'Wish You Were Here ', 'Pink Floyd ', 1975, NULL),
(3742, 'The Wall', 'Pink Floyd ', 1979, 'anotherBrick.jpg'),
(3743, 'A Kind of Magic', 'Queen', 1986, 'aKindOfMagic.jpg'),
(3744, 'Made in Heaven', 'Queen', 1995, NULL),
(3745, 'Tommy', 'The Who', 1969, NULL),
(3746, 'Quadrophenia', 'The Who', 1973, NULL),
(3747, 'Master of Puppets', 'Metallica', 1986, NULL),
(3748, '...And Justice for All ', 'Metallica', 1988, 'andJusticeForAll.jpg'),
(3749, 'Tattoo You', 'The Rolling Stones', 1981, NULL),
(3750, 'Steel Wheels', 'The Rolling Stones', 1989, NULL),
(3751, 'Highway to Hell', 'AC/DC', 1979, NULL),
(3752, 'Back in Black', 'AC/DC', 1980, 'backInBlack.jpg'),
(3753, 'Bleach ', 'Nirvana', 1989, 'bleach.jpg'),
(3754, 'Nevermind', 'Nirvana', 1991, NULL),
(3755, 'Appetite for Destruction', 'Guns N Roses', 1987, 'appetiteFor.jpg'),
(3756, 'Chinese Democracy', 'Guns N Roses', 2008, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `ArtistNo` int(11) NOT NULL COMMENT 'Artist Number',
  `ArtistName` varchar(100) NOT NULL COMMENT 'Artist Name',
  `Genre` varchar(100) NOT NULL COMMENT 'Artist Genre'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`ArtistNo`, `ArtistName`, `Genre`) VALUES
(8520, 'Red Hot Chili Peppers', 'Funk Rock'),
(8521, 'Led Zeppelin ', 'Rock And Roll'),
(8522, 'The Beatles', 'Rock'),
(8523, 'Pink Floyd', 'Progressive Rock'),
(8524, 'Queen', 'Rock'),
(8525, 'The Who', 'Rock'),
(8526, 'Metallica', 'Heavy Metal'),
(8527, 'The Rolling Stones', 'Rock'),
(8528, 'AC/DC', 'Rock And Roll'),
(8529, 'Nirvana', 'Grunge'),
(8530, 'Guns N Roses', 'Hard Rock');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`AlbumNo`),
  ADD UNIQUE KEY `AlbumNo` (`AlbumNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `AlbumNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3757;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

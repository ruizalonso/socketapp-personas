-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 07:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistemasdistribuidos`
--

-- --------------------------------------------------------

--
-- Table structure for table `ciudad`
--

CREATE TABLE `ciudad` (
  `ciud_id` int(10) NOT NULL,
  `ciud_nombre` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ciudad`
--

INSERT INTO `ciudad` (`ciud_id`, `ciud_nombre`) VALUES
(1, 'Cartago'),
(2, 'Medellin'),
(3, 'Cali'),
(4, 'Manizales'),
(5, 'Bogot');

-- --------------------------------------------------------

--
-- Table structure for table `personas`
--

CREATE TABLE `personas` (
  `dir_tel` int(13) NOT NULL,
  `dir_tipo_tel` varchar(50) DEFAULT NULL,
  `dir_nombre` varchar(100) DEFAULT NULL,
  `dir_direccion` varchar(100) DEFAULT NULL,
  `dir_ciud_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personas`
--

INSERT INTO `personas` (`dir_tel`, `dir_tipo_tel`, `dir_nombre`, `dir_direccion`, `dir_ciud_id`) VALUES
(1, 'Natural', 'Carlos Mendez', 'Calle 34 2 N 03', 1),
(2, 'Natural', 'Julian Valencia', 'Calle 52 4  35', 3),
(3, 'Natural', 'Juan David Valvuena', 'Calle 36 7 N 26', 2),
(4, 'Natural', 'Victor Ramires', 'Calle 10 19  35', 1),
(5, 'Natural', 'Juan Roma', 'Calle 20 4  35', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`ciud_id`);

--
-- Indexes for table `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`dir_tel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

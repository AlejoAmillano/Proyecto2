-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 08, 2020 at 09:15 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u8DG3IsJYf`
--

-- --------------------------------------------------------

--
-- Table structure for table `resenias`
--

CREATE TABLE `resenias` (
  `id` int(11) NOT NULL,
  `idserie` int(40) NOT NULL,
  `idusuario` int(40) NOT NULL,
  `text` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'text',
  `puntaje` double NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `username` varchar(40) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'username'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `resenias`
--

INSERT INTO `resenias` (`id`, `idserie`, `idusuario`, `text`, `puntaje`, `username`) VALUES
(7, 66788, 20, 'Na mentira, es buenisima', 6, 'asdasd'),
(8, 2734, 20, 'Es buenisima, mirenla', 5, 'asdasd'),
(9, 2734, 20, 'Na mentira es malisima', 1, 'asdasd'),
(10, 66788, 20, 'Es malisima', 7, 'Alejo');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'email',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'name',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(2, 'asd@gmail.com', 'asd', '$2a$10$/bMQ/K4Iga63rcpIAmUWUOXtHRfdnn2cLn6SgfPkvDaIEN4KwZeEe'),
(3, 'asd@gmail.com', 'asdasd', '$2a$10$jELkcxhy/xZyz36V1XoI7eIhGxhDC0MTYZlt5RVIfXLNGD5L9MAEO'),
(4, 'asdasdasd@gmail.com', 'asd', '$2a$10$K45uT34ElkCudWp97i21r.zqLCrbb.qH52e7oFtmfmYkc1qFsFq4y'),
(10, 'sdada5@gmail.com', 'asdasda', '$2a$10$jg9g1GTnFzQtJPjwcp/1ZeuZvg6572cibZkv/j2UVx2BGF9SLPty2'),
(11, 'asdasd123123@gmail.com', 'asdasd', '$2a$10$./7AOuqvCuajTUwltdowHecwpY/IvmCn8UafgY/AixV89kJDjUibO'),
(12, 'asd26@gmail.com', 'asd21', '$2a$10$yPSMUlG70wbbp84vYJWoCe8uNG47TaKTavLIXTajkt98iHqlLkAa6'),
(20, 'hola@gmail.com', 'Alejo', '$2a$10$DnygctV.gY6.ZlkE7WtNUu40NsuxMPHzapzoD6o0Sa8PeV6pP0xh6'),
(21, 'w@w', 'asdasd', '$2a$10$uyjXNerdbCiH7w20SDhr2uycA4QGd/ctB94iEmiUNWpUwPRjHPgfC'),
(22, 'asdasd@gmail.com', 'asd', '$2a$10$SC3vokFisvfHL79Wtk6AAOkvyqLQ8PLruQVk2fXWAAY2s3GZNkhoO'),
(23, 'asdasd@gmail.com', 'asdasd', '$2a$10$UKkjbE1fcsA228pKdnwcQ./gOpCyL0nMsvwrQPRKahVvqEdnenhq2'),
(24, 'ada@ad', 'asdasd', '$2a$10$g7G08QtIru/jvpV.JJJ6vOSSfY7DLbm01NqCWFWl9XNmLVIJLwVEy'),
(25, 'asaubc@gmail.com', 'asdasd', '$2a$10$snfsZ6QrfDeycC5iJFRDSOgxlDQm0xcHt68HuwMjf4/W/KY11ZbmO'),
(26, 'a@a', 'asd', '$2a$10$uWKF6GFcZ.ZgUwhvkn4Stexxn9CgvcvYX8nXG/CSqFGo1E3NUlluW'),
(27, 'asd@asd', 'asda', '$2a$10$WAC6YXxa5NMp0eOPcYhPIOpZWVR1V.PwTWNXsSkLI0N2r9VdUD8B2'),
(28, 'z@z', 'asd', '$2a$10$CUJ/EFXn1mcZLvPZvFpxnOQtwkGVIdZZiOr2pu.uiB9jxGd0u597u'),
(29, 'a@aas', 'asd', '$2a$10$MbstqINo8Z5Y3DYPitKxaOZWnu/hsWSuCtGhLp4BdWvDRp59gJ7XW'),
(30, 'sabciuasi@asasc', 'asd', '$2a$10$PzxVJP/6iKv.B2Wi88KI5.3d/L96qmCQkFNopFe3/K5u4QE8x.GFe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `resenias`
--
ALTER TABLE `resenias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2024 at 10:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sweety`
--

-- --------------------------------------------------------

--
-- Table structure for table `hampers`
--

CREATE TABLE `hampers` (
  `id_hampers` char(2) NOT NULL,
  `name_hampers` varchar(25) NOT NULL,
  `hampers_desc` text NOT NULL,
  `price` bigint(30) NOT NULL,
  `hampers_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hampers`
--

INSERT INTO `hampers` (`id_hampers`, `name_hampers`, `hampers_desc`, `price`, `hampers_img`) VALUES
('h1', 'Hampers Premium', 'p', 500000, 'store_img/hampers/Hampers1.png'),
('h2', 'Hampers Premium 2', 'p', 400000, 'store_img/hampers/hampers2.png'),
('h3', 'Hampers Premium 3', 'p', 400000, 'store_img/hampers/hampers3.png'),
('h4', 'Hampers Premium 4', 'p', 400000, 'store_img/hampers/hampers4.png'),
('h5', 'Hampers Premium 5', 'p', 400000, 'store_img/hampers/hampers5.png'),
('h6', 'Hampers Platinum', 'p', 10000000, 'store_img/hampers/hampers6.png');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` char(2) NOT NULL,
  `name_product` varchar(20) NOT NULL,
  `price` bigint(30) NOT NULL,
  `img_product` varchar(255) NOT NULL,
  `desc_product` text NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `price`, `img_product`, `desc_product`, `weight`) VALUES
('01', 'Nastar', 200000, 'store_img/product/Nastar.png', 'Hallo semua, kue nastar adalah kue idaman kita semua. Dikarenanya, kue ini terasa istimewa diantara kita. Kue ini lembut dan ada isian berupa selai nanas yang renyah didalamnya. Yuk pesan! harga selalu yang termurah!', 0),
('02', 'Kastengel', 500000, 'store_img/product/Kastengel.png', 'p', 100),
('03', 'Cookies', 400000, 'store_img/product/Cookies.png', 'p', 50);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_product`
--

CREATE TABLE `transaksi_product` (
  `id_transaksi` int(11) NOT NULL,
  `id_product` char(2) NOT NULL,
  `created_at` datetime NOT NULL,
  `progres_at` varchar(255) NOT NULL,
  `price` bigint(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi_product`
--

INSERT INTO `transaksi_product` (`id_transaksi`, `id_product`, `created_at`, `progres_at`, `price`) VALUES
(1, '01', '2024-06-06 05:20:59', 'Sedang dalam pengiriman', 200000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `nomor_telp` varchar(20) NOT NULL,
  `img_profile` varchar(255) NOT NULL,
  `id_transaksi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_password`, `email`, `nomor_telp`, `img_profile`, `id_transaksi`) VALUES
(1, 'Dilfa Rista', '', 'dilfarista23@gmail.com', '0895631132041', 'store_img/profil/profil1.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hampers`
--
ALTER TABLE `hampers`
  ADD PRIMARY KEY (`id_hampers`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `transaksi_product`
--
ALTER TABLE `transaksi_product`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_transaksi` (`id_transaksi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transaksi_product`
--
ALTER TABLE `transaksi_product`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transaksi_product`
--
ALTER TABLE `transaksi_product`
  ADD CONSTRAINT `transaksi_product_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `id_transaksi` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksi_product` (`id_transaksi`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

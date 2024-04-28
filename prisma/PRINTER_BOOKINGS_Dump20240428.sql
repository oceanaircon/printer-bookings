-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: printer-bookings.cti0oeai6f3x.eu-north-1.rds.amazonaws.com    Database: printer_bookings
-- ------------------------------------------------------
-- Server version	8.0.35


--
-- Table structure for table `Booker`
--

CREATE TABLE `Booker` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `taxnumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Booker_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `Booking`
--

CREATE TABLE `Booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookerId` int NOT NULL,
  `printerId` int DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `discount` int NOT NULL DEFAULT '0',
  `createdBy` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Booking_printerId_key` (`printerId`),
  KEY `Booking_bookerId_fkey` (`bookerId`),
  KEY `Booking_createdBy_fkey` (`createdBy`),
  CONSTRAINT `Booking_bookerId_fkey` FOREIGN KEY (`bookerId`) REFERENCES `Booker` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Booking_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User` (`userId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Booking_printerId_fkey` FOREIGN KEY (`printerId`) REFERENCES `Printer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fee` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `Printer`
--

CREATE TABLE `Printer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryId` int NOT NULL,
  `serial` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('SZABAD','FOGLALT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SZABAD',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Printer_serial_key` (`serial`),
  KEY `Printer_categoryId_fkey` (`categoryId`),
  CONSTRAINT `Printer_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `Service`
--

CREATE TABLE `Service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Teszt Munka',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user_1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`),
  UNIQUE KEY `User_userId_key` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Table structure for table `Worksheet`
--

CREATE TABLE `Worksheet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookingId` int NOT NULL,
  `serviceId` int DEFAULT NULL,
  `errorReportingTime` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `repairDeadline` datetime(3) NOT NULL,
  `status` enum('FOLYAMATBAN','BEFEJEZETT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'FOLYAMATBAN',
  `createdBy` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Worksheet_bookingId_fkey` (`bookingId`),
  KEY `Worksheet_createdBy_fkey` (`createdBy`),
  KEY `Worksheet_serviceId_fkey` (`serviceId`),
  CONSTRAINT `Worksheet_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Worksheet_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User` (`userId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Worksheet_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Dump completed on 2024-04-28 14:55:44

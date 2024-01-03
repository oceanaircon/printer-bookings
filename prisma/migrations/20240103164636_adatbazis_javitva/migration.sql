/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `maintenanceId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `printerId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `Maintenance` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Booker` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_maintenanceId_fkey`;

-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_printerId_fkey`;

-- AlterTable
ALTER TABLE `Booker` MODIFY `address` VARCHAR(191) NOT NULL DEFAULT '1086 Budapest, Vas utca 1.',
    ALTER COLUMN `email` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `serviceId`;

-- AlterTable
ALTER TABLE `Service` DROP COLUMN `maintenanceId`,
    DROP COLUMN `printerId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'Teszt Munka';

-- DropTable
DROP TABLE `Maintenance`;

-- CreateTable
CREATE TABLE `Worksheet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,
    `errorReportingTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `repairDeadline` DATETIME(3) NOT NULL DEFAULT (now() + '2 days'),
    `status` ENUM('IN_PROGRESS', 'DONE') NOT NULL DEFAULT 'IN_PROGRESS',

    UNIQUE INDEX `Worksheet_bookingId_key`(`bookingId`),
    UNIQUE INDEX `Worksheet_serviceId_key`(`serviceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Booker_email_key` ON `Booker`(`email`);

-- AddForeignKey
ALTER TABLE `Worksheet` ADD CONSTRAINT `Worksheet_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Worksheet` ADD CONSTRAINT `Worksheet_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

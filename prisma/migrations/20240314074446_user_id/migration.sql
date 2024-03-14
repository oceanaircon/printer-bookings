/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `Worksheet` DROP FOREIGN KEY `Worksheet_createdBy_fkey`;

-- AlterTable
ALTER TABLE `Booking` MODIFY `createdBy` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Worksheet` MODIFY `createdBy` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_userId_key` ON `User`(`userId`);

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Worksheet` ADD CONSTRAINT `Worksheet_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

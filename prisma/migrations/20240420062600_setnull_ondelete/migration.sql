-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_printerId_fkey`;

-- DropForeignKey
ALTER TABLE `Worksheet` DROP FOREIGN KEY `Worksheet_serviceId_fkey`;

-- AlterTable
ALTER TABLE `Booking` MODIFY `printerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Service` ALTER COLUMN `name` DROP DEFAULT;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `userId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Worksheet` MODIFY `serviceId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_printerId_fkey` FOREIGN KEY (`printerId`) REFERENCES `Printer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Worksheet` ADD CONSTRAINT `Worksheet_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

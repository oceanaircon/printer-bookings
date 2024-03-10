-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `createdBy` INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE `Worksheet` ADD COLUMN `createdBy` INTEGER NOT NULL DEFAULT 2;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Worksheet` ADD CONSTRAINT `Worksheet_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

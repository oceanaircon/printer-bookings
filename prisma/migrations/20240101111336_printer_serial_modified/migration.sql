/*
  Warnings:

  - A unique constraint covering the columns `[serial]` on the table `Printer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Printer` MODIFY `serial` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Printer_serial_key` ON `Printer`(`serial`);

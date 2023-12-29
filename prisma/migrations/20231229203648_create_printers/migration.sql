-- CreateTable
CREATE TABLE `Bookers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL DEFAULT '8000 Székesfehérvár, Fő utca 1.',
    `taxnumber` VARCHAR(191) NOT NULL DEFAULT '1234567812345678',
    `phone` VARCHAR(191) NOT NULL DEFAULT '+36 00 0000000',
    `email` VARCHAR(191) NOT NULL DEFAULT 'email@email.em',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

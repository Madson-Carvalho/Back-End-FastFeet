-- CreateTable
CREATE TABLE `Recipient` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(15) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `email` VARCHAR(50) NOT NULL,
    `address` VARCHAR(100) NULL,

    UNIQUE INDEX `Recipient_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `cpf` VARCHAR(15) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `perfil` ENUM('ADMIN', 'DELIVERY_MAN') NOT NULL DEFAULT 'DELIVERY_MAN',
    `phone` VARCHAR(20) NULL,

    UNIQUE INDEX `Users_cpf_key`(`cpf`),
    UNIQUE INDEX `Users_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

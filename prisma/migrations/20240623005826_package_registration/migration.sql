-- CreateTable
CREATE TABLE `Package` (
    `id` VARCHAR(191) NOT NULL,
    `deliveryMan` VARCHAR(100) NOT NULL,
    `requestDate` DATETIME(3) NOT NULL,
    `previusRequestDate` DATETIME(3) NOT NULL,
    `deliveryDate` DATETIME(3) NULL,
    `status` ENUM('DISPONIVEL_RETIRADA', 'ENTREGUE', 'DEVOLVIDO') NULL,
    `deliveryAddress` VARCHAR(100) NOT NULL,
    `photo` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

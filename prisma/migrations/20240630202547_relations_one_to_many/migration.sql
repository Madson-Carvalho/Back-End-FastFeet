-- AlterTable
ALTER TABLE `Package` ADD COLUMN `recipientId` VARCHAR(191) NULL,
    ADD COLUMN `usersId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `Package_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `Package_recipientId_fkey` FOREIGN KEY (`recipientId`) REFERENCES `Recipient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

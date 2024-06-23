/*
  Warnings:

  - The values [DISPONIVEL_RETIRADA,ENTREGUE,DEVOLVIDO] on the enum `Package_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Package` MODIFY `status` ENUM('AVAILABLE_REMOVE', 'DELIVERED', 'RETURNED') NULL;

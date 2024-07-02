-- CreateEnum
CREATE TYPE "Perfil" AS ENUM ('ADMIN', 'DELIVERY_MAN');

-- CreateEnum
CREATE TYPE "StatusDelivery" AS ENUM ('AVAILABLE_REMOVE', 'DELIVERED', 'RETURNED');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "password" TEXT NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'DELIVERY_MAN',
    "phone" VARCHAR(20),
    "address" VARCHAR(100),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipient" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "phone" VARCHAR(20),
    "email" VARCHAR(50) NOT NULL,
    "address" VARCHAR(100),

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Package" (
    "id" TEXT NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL,
    "previusRequestDate" TIMESTAMP(3) NOT NULL,
    "deliveryDate" TIMESTAMP(3),
    "status" "StatusDelivery",
    "deliveryAddress" VARCHAR(100) NOT NULL,
    "photo" VARCHAR(150),
    "usersId" TEXT,
    "recipientId" TEXT,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_cpf_key" ON "Users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Recipient_cpf_key" ON "Recipient"("cpf");

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

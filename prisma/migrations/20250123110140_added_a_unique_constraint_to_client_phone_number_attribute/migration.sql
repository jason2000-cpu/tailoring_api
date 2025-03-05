/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Clients" ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Clients_phone_key" ON "Clients"("phone");

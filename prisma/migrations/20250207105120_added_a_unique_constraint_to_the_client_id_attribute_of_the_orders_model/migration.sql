/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "FinancialRecord" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "createdAt" SET DEFAULT date_trunc('day', now());

-- CreateIndex
CREATE UNIQUE INDEX "Orders_clientId_key" ON "Orders"("clientId");

/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `FinancialRecord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FinancialRecord_userId_key" ON "FinancialRecord"("userId");
